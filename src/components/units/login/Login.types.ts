import { ChangeEvent } from "react";
export interface ILoginPresenterProps {
  onClickHome: () => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickRegistPage: () => void;
  onClickSubmit: () => void;
  errorEmail: String;
  errorPassword: String;
}

export interface ILoginBtnProps {
  isActive: boolean;
}
