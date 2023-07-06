import Api from "../api/apiV1";
import { Response } from "../interfaces/request";

export default class Dashboard extends Api {
  async analytics() {
    this.method = "GET";
    this.path = "dashboard/analytics";
    this.params = {};

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
