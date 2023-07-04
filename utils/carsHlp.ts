import Api from "../api/apiV1";
import { Response, RequestQuery } from "../interfaces/request";
import { RequestPost } from "../interfaces/cars";

export default class Users extends Api {
  async get(id: number = 0, params: RequestQuery = {}) {
    this.method = "GET";
    this.path = "cars";
    this.params = params;

    if (id === 0) {
      this.path = "cars";
    } else if (id) {
      this.path = "cars/" + id;
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
    this.path = "cars";
    this.params = {};
    this.body = data;

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error" || res.response?.errors) {
          return reject(res.response);
        }

        done(res.response);
      });
    });
  }

  async update(id: string, data: RequestPost) {
    this.method = "PUT";
    this.path = "cars/" + id;
    this.params = {};
    this.body = data;

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
