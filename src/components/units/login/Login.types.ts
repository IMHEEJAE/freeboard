import { ChangeEvent } from "react";
export interface ILoginPresenterProps {
  onClickHome: () => void;
  onClickScreen: () => void;
  onClickRegist: () => void;
  onChangePasswordConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  isRegist: boolean;
  errorEmail: String;
  errorName: String;
  errorPassword: String;
  errorPasswordConfirm: String;
}

export interface ILoginBtnProps {
  isActive: boolean;
}
