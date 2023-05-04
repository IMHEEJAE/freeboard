import { ChangeEvent } from "react";

export interface ILoginContainerProps {
  isEdit: boolean;
}

export interface ILoginPresenterProps {
  isActive: boolean;
  isEdit: boolean;
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
