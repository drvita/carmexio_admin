export interface Role {
  name?: string;
}
export interface Phone {
  number: number,
  type: string,
}
export interface User {
  id?: number;
  name?: string;
  gender?: string;
  roles?: Array <Role>;
  phones?: Array <Phone>;
}
export interface Storage {
  token: string;
  data: User;
}
