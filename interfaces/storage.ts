export interface User {
  id?: string;
  name?: string;
  gender?: string;
}
export interface Storage {
  token: string;
  data: User;
}
