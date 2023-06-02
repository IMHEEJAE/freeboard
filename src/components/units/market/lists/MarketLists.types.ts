import { ChangeEvent } from "react";

export interface IMarketPresenterProps {
  BestItemData: any;
  SoldOutTrueData?: any;
  SoldOutTrueRefetch: any;
  SoldOutTrueRetchMore: any;
  SoldOutFalseData?: any;
  SoldOutFalseRefetch: any;
  SoldOutFalseRetchMore: any;
  // data?: any;
  // refetch: (
  //   variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  // onLoadMore: () => void;
  onLoadMoreSoldOutTrue: () => void;
  onLoadMoreSoldOutFalse: () => void;
  fetchMore: any;
  onChangeImageError: (event: { target: { src: string } }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  onClickMoveToPage: (path: string) => () => void;
}
export interface IMatched {
  isMatched: boolean;
}
