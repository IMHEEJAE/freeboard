import { withAuth } from "../../../src/components/commons/hoc";
import MypagePointContainer from "../../../src/components/units/mypage/contents/point/MypagePoint.container";

const MyPoint = () => {
  return <MypagePointContainer />;
};
export default withAuth(MyPoint);
