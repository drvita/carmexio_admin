export interface Response {
  type?: string;
  response?: any;
  message?: string;
}
export interface ResponseLogin extends Response {
  token?: string;
  data?: any;
}
export interface Request {
  method: string;
  headers: {
    "Content-Type": string;
    Accept: string;
    Authorization?: string;
  };
  body?: string;
}
export interface Credentials {
  email: string;
  password: string;
}
export interface RequestQuery {
  page?: number;
}
