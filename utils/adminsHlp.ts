import Api from "../api/apiV1";
import { Response, RequestQuery } from "../interfaces/request";
import { RequestPost } from "../interfaces/admins";

export default class Admins extends Api {
  async get(id: number = 0, params: RequestQuery = {}) {
    this.method = "GET";
    this.path = "admins/list";
    this.params = params;

    if (id === 0) {
      this.path = "admins";
    } else if (id) {
      this.path = "admins/" + id;
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

  async set(data: RequestPost) {
    this.method = "POST";
    this.path = "admins";
    this.params = {};
    this.body = data;

    if (!data.password) {
      data.password = this.randString(16) + "#";
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
