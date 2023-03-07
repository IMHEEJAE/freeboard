import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardWritePresenterProps {
  isActive: boolean;
  nameError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  hanldeUpdate: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export interface IUpdateBoardInput {
  title?: string;
  content?: string;
}
export interface ISubmitBtnProps {
  isActive: boolean;
}
