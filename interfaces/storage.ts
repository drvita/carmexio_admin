export interface User {
  id?: number;
  name?: string;
  gender?: string;
}
export interface Storage {
  token: string;
  data: User;
}
