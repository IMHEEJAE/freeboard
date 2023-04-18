import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardWritePresenterProps {
  isActive: boolean;
  nameError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  hanldeUpdate: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onClickAddressSearch: () => void;
  isOpen: boolean;
  onCompleteAddressSearch: (data: any) => void;

  zipcode: string;
  address: string;
  addressDetail: string;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
export interface ISubmitBtnProps {
  isActive: boolean;
}
export interface BoardWriteContainerProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
