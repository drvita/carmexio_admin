import Api from "../api/apiV1";
import { Response, Credentials, ResponseLogin } from "../interfaces/request";
const storage = useStorage();

export default class Login extends Api {
  async login(credentials: Credentials): Promise<ResponseLogin> {
    if (
      !credentials ||
      typeof credentials !== "object" ||
      !credentials.email ||
      !credentials.password
    ) {
      return Promise.resolve().then(() => ({}));
    }

    this.method = "POST";
    this.path = "admins/login";
    this.body = credentials;

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error") {
          return reject(res);
        }

        if (!res.response.data.email_validated) {
          return reject({
            ...res.response,
            message: "unverified email",
          });
        }

        storage.setSession(res.response);
        done(res.response);
      });
    });
  }
  async logout() {
    this.method = "POST";
    this.path = "admins/logout";
    this.body = {};

    return new Promise(async (done, reject) => {
      return await this.request()
        .then((res: Response) => {
          if (
            res.type === "server error" &&
            res.message !== "Unauthenticated."
          ) {
            console.error("[DEBUG] logout failer in help:", res);
            return reject(res);
          }

          storage.deleteSession();
          done(res.response);
        })
        .catch((e) => reject(e));
    });
  }
}
