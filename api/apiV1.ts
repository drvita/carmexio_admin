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
        const e: string = params[i];
        url.searchParams.append(e, this.params[`${e}`]);
      }
    }

    console.log("[APIv1] Request:", url.pathname);
    return await fetch(url, dataRequest)
      .then((res) => res.status !== 204 && res.json())
      .then((res) => ({
        type: "server ok",
        response: res,
      }))
      .catch((err) => ({
        type: "server error",
        message: err.message,
      }));
  }
}
