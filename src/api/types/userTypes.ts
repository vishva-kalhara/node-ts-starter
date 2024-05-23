export interface IUser {
  id: number;
  email: String;
  password: String;
  confirmPassword: String;
  role: 'admin' | 'User';
}

export interface IGetAllUsersResponse {
  status: String;
  count: Number;
  data: IUser[];
}

export interface IGetUserResponse {
  status: String;
  data: IUser;
}
