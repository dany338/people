export interface IDataResponse {
  username: string;
  name: string;
  lastname: string;
  roles: string[],
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

export interface ILoginProps {
  username: string;
  password: string;
}

export interface ILoginPropsAuthLogin {
  username: string;
  password: string;
  authLogin: () => void;
  onChangeInput: (e: React.FormEvent<HTMLInputElement>) => void;
}