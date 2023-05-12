export interface ILoginContainerProps {
  isEdit: boolean;
}
export interface IFormData {
  email: string;
  password: string;
}
export interface ILoginPresenterProps {
  [x: string]: any;
  // isActive: boolean;
  isEdit: boolean;
  onClickHome: () => void;
  // onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickRegistPage: () => void;
  onClickSubmit: (data: IFormData) => Promise<void>;
  // errorEmail: String;
  // errorPassword: String;
}

export interface ILoginBtnProps {
  isActive: boolean;
}
