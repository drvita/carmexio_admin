import Api from "../api/apiV1";
import { Response, RequestQuery } from "../interfaces/request";
import { RequestPost } from "../interfaces/sellers";

export default class Sellers extends Api {
  async get(id: number = 0, params: RequestQuery = {}) {
    this.method = "GET";
    this.path = "sellers/list";
    this.params = params;
    console.log(id);

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error" || res.response?.errors) {
          return reject(res);
        }

        done(res.response);
      });
    });
  }

  // Modify
  async set(data: RequestPost) {
    this.method = "POST";
    this.path = "sellers";
    this.params = {};
    this.body = data;

    if (!data.password) {
      data.password = "Password.01#"; // "#"+ this.randString(16);
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
    this.path = `sellers/${id}`;
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
    this.path = `sellers/${id}`;
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
