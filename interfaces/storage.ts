export interface Role {
  name?: string;
}
export interface User {
  id?: number;
  name?: string;
  gender?: string;
  roles?: Array <Role>;
}
export interface Storage {
  token: string;
  data: User;
}
