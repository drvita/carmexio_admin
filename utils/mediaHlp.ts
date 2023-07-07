import Api from "../api/apiV1";
import { Response } from "../interfaces/request";

export default class Media extends Api {
  convertImageToBase64(file: File, callback: Function) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      callback && callback(file, reader.result);
    };
  }

  async set(path: string, images: Array<string>) {
    this.method = "POST";
    this.path = path;
    this.params = {};
    this.body = { images };

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error" || res.response?.errors) {
          return reject(res);
        }

        done(res.response);
      });
    });
  }

  async delete(path: string) {
    this.method = "DELETE";
    this.path = path;
    this.params = {};
    this.body = {};

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error" || res.response?.errors) {
          return reject(res);
        }

        done(res.response);
      });
    });
  }

  async setVideo(path: string, videos: Array<string>) {
    this.method = "POST";
    this.path = path;
    this.params = {};
    this.body = { videos };

    return new Promise(async (done, reject) => {
      return await this.request().then((res: Response) => {
        if (res.type === "server error" || res.response?.errors) {
          return reject(res);
        }

        done(res.response);
      });
    });
  }
}
