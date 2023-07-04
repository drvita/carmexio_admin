import Api from "../api/apiV1";
import { Response, RequestQuery } from "../interfaces/request";

export default class Users extends Api {
  async get(id: number = 0, params: RequestQuery = {}) {
    this.method = "GET";
    this.path = "users/list";
    this.params = params;

    if (id === 0) {
      this.path = "users";
    } else if (id) {
      this.path = "users/" + id;
    }

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error" || res.response?.errors) {
          return reject(res.response);
        }

        done(res.response);
      });
    });
  }
}
