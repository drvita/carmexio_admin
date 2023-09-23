import Routes from "./routes";
import { Response, Request, RequestQuery } from "../interfaces/request";

export default class ApiV1 {
  protected method: string = "";
  protected path: string = "";
  protected body: object = {};
  protected params: RequestQuery = {};

  async request(): Promise<Response> {
    const storage = useStorage();
    const token = storage.getToken();
    const dataRequest: Request = {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const url = new URL(Routes.host + "/api/v1/" + this.path);

    if (this.method !== "GET") {
      dataRequest.body = JSON.stringify(this.body);
    }
    if (token) {
      dataRequest.headers.Authorization = `Bearer ${token}`;
    }

    if (this.params) {
      const params = Object.keys(this.params);
      for (let i = 0; i < params.length; i++) {
        const params = this.params as { [key: string]: string };
        Object.keys(params).forEach((e) => {
          url.searchParams.append(e, params[e]);
        });
      }
    }

    console.log("[APIv1] Request:", url.pathname);
    return await fetch(url, dataRequest)
      .then(async (res) => {
        if (res.status === 204) {
          return;
        }

        if (res.status >= 400) {
          throw await res.json();
        }

        if(res.headers.get("content-type") === "application/json") {
          return res.json();
        }

        if(res.headers.get("content-type") === "application/pdf") {
          return res.blob();
        }

        if(res.headers.get("content-type") === "text/plain") {
          return res.text();
        }

        return res;
      })
      .then((res) => ({
        type: "server ok",
        response: res,
      }))
      .catch((e) => ({
        ...e,
        type: "server error",
      }));
  }

  randString(length: number) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.#_-";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
