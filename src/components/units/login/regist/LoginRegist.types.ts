import { ChangeEvent } from "react";

export interface ILoginRegistPresenterProps {
  errorEmail: String;
  errorName: String;
  errorPassword: String;
  errorPasswordConfirm: String;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginPage: () => void;
  onClickRegist: () => void;
}