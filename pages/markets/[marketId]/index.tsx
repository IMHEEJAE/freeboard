import MarketDetailContainer from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentListContainer from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWriteContainer from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";

export default function MarketId() {
  return (
    <>
      <MarketDetailContainer />
      <MarketCommentListContainer />
      <MarketCommentWriteContainer />
    </>
  );
}
