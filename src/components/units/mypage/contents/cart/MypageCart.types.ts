import { ChangeEvent } from "react";

export interface IMypageCartPresenterProps {
  refetch: any;
  data: any;
  dataPick: any;
  isTab: boolean;
  onClickSold: () => void;
  onClickPick: () => void;
  onChangeSearchMypage: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface isTab {
  isTab: boolean;
}
