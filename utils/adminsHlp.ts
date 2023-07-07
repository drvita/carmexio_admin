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
        if (res.type === "server error") {
          return reject(res);
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
        if (res.type === "server error") {
          return reject(res);
        }

        done(res.response);
      });
    });
  }

  async update(id: number, data: RequestPost) {
    this.method = "PUT";
    this.path = `admins/${id}`;
    this.params = {};
    this.body = data;

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error") {
          return reject(res);
        }

        done(res.response);
      });
    });
  }

  async delete(id: number) {
    this.method = "DELETE";
    this.path = `admins/${id}`;
    this.params = {};
    this.body = {};

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error") {
          return reject(res);
        }

        done(res.response);
      });
    });
  }
}
