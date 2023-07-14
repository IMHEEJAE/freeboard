import { withAuth } from "../../../src/components/commons/hoc";
import MarketWriteContainer from "../../../src/components/units/market/write/MarketWrite.container";

const MarketsNew = () => {
  return <MarketWriteContainer isEdit={false} />;
};
export default withAuth(MarketsNew);
