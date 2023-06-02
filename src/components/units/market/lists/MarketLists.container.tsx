import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./MarketLists.queries";
import { useSearch } from "../../../commons/hooks/useSearch";
import MarketsListsPresenter from "./MarketLists.presenter";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IQuery } from "../../../../commons/types/generated/types";

export default function MarketsListsContainer() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data: BestItemData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OF_THE_BEST);

  const {
    data: SoldOutTrueData,
    refetch: SoldOutTrueRefetch,
    fetchMore: SoldOutTrueRetchMore,
  } = useQuery(FETCH_USEDITEMS, {
    variables: { isSoldout: true },
  });
  const {
    data: SoldOutFalseData,
    refetch: SoldOutFalseRefetch,
    fetchMore: SoldOutFalseRetchMore,
  } = useQuery(FETCH_USEDITEMS, {
    variables: { isSoldout: false },
  });

  const { onChangeSearch, keyword } = useSearch({
    refetch: SoldOutTrueRefetch || SoldOutFalseRefetch,
  });

  const onLoadMoreSoldOutTrue = () => {
    if (SoldOutTrueData === undefined) return;
    void SoldOutTrueRetchMore({
      variables: {
        page:
          Math.ceil((SoldOutTrueData?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const onLoadMoreSoldOutFalse = () => {
    if (SoldOutFalseData === undefined) return;
    void SoldOutFalseRetchMore({
      variables: {
        page:
          Math.ceil((SoldOutFalseData?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onChangeImageError = (event: { target: { src: string } }) => {
    const defaultImage = `../../../../images/nodata_image.png`;
    event.target.src = defaultImage;
  };

  return (
    <>
      <MarketsListsPresenter
        BestItemData={BestItemData}
        SoldOutTrueData={SoldOutTrueData}
        SoldOutTrueRefetch={SoldOutTrueRefetch}
        SoldOutTrueRetchMore={SoldOutTrueRetchMore}
        SoldOutFalseData={SoldOutFalseData}
        SoldOutFalseRefetch={SoldOutFalseRefetch}
        SoldOutFalseRetchMore={SoldOutFalseRetchMore}
        // data={data}
        // refetch={refetch}
        // fetchMore={fetchMore}
        onChangeImageError={onChangeImageError}
        onChangeSearch={onChangeSearch}
        onLoadMoreSoldOutTrue={onLoadMoreSoldOutTrue}
        onLoadMoreSoldOutFalse={onLoadMoreSoldOutFalse}
        keyword={keyword}
        onClickMoveToPage={onClickMoveToPage}
        fetchMore={undefined}
      />
    </>
  );
}
