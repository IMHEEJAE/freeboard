import { ChangeEvent } from "react";
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
  data?: any;
  isEdit: boolean;
}
export interface IMarketWritePresenterProps {
  [x: string]: any;
  data?: Pick<IQuery, "fetchUseditem">;
  onClickSubmit: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  contents: string;
  fileUrls: string[];
  myAddress: any;
  addressLat: any;
  addressLng: any;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressLat: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressLng: (event: ChangeEvent<HTMLInputElement>) => void;
}
