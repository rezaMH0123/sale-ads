export type LoginT = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
