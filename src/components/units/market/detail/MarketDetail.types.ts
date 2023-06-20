export interface MarketDetailPresenterProps {
  data?: any;
  onClickMoveToPage: (path: string) => () => void;
  onClickDelete: () => void;
  onClickPickCount: () => void;
}
