export interface IMarketAnswerWriteContainerProps {
  answerel: any;
  el?: any;
  isAnswerEdit: boolean;
  setIsAnswerEdit: any;
  setIsOpenAnswer: any;
}
export interface IMarketAnswerWritePresenterProps {
  onChangeContents: any;
  onClickSubmitAnswer: () => void;
  onClickUpdateAnswer: (event: any) => Promise<void>;
  isAnswerEdit: boolean;
  answerel: any;
}
