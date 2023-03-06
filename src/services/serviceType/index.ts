export interface ILoginUser {
  email: string;
  password: string;
}

export interface ISignUpUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword?: string;
}
