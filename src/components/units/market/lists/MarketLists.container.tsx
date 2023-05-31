import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "./MarketLists.queries";
import { useSearch } from "../../../commons/hooks/useSearch";
import MarketsListsPresenter from "./MarketLists.presenter";
export default function MarketsListsContainer() {
  const { data, fetchMore, refetch } = useQuery(FETCH_USEDITEMS);

  const { onChangeSearch, keyword } = useSearch({
    refetch,
  });

  // const { onLoadMore } = useScrollMode({
  //   data,
  //   fetchKey: "fetchUseditems",
  //   fetchMore,
  // });
  // const onChangeImageError = (event: { target: { src: string } }) => {
  //   const defaultImage = `../../../../images/nodata_image.png`;
  //   event.target.src = defaultImage;
  // };

  return (
    <>
      <MarketsListsPresenter
        data={data}
        refetch={refetch}
        fetchMore={fetchMore}
        // onChangeImageError={onChangeImageError}
        onChangeSearch={onChangeSearch}
        keyword={keyword}
      />
    </>
  );
}
