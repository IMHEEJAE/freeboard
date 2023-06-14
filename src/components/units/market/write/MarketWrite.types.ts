import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string;
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
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
