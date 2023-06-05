export interface IFormData {
  contents: string;
  name: string;
  remarks: string;
  //   contents: string;
  price: number;
}

export interface IMarketWritePresenterProps {
  [x: string]: any;
  onClickSubmit: (data: IFormData) => Promise<void>;
}
