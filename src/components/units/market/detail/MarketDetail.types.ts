import { MouseEventHandler } from "react";

export interface MarketDetailPresenterProps {
  onClickDelete: MouseEventHandler<HTMLButtonElement> | undefined;
  data?: any;
  onClickMoveToPage: (path: string) => () => void;
}
