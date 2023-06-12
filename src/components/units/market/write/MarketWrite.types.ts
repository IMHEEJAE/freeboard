import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  contents: string;
  name: string;
  remarks: string;
  //   contents: string;
  price: number;
}

export interface IMarketWriteContainerProps {
  data?: Pick<IQuery, "fetchUseditem">;
}
export interface IMarketWritePresenterProps {
  [x: string]: any;
  onClickSubmit: (data: IFormData) => Promise<void>;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  fileUrls: string[];
}
