import { withAuth } from "../../../src/components/commons/hoc";
import MypageProfileContainer from "../../../src/components/units/mypage/contents/profile/MypageProfile.container";

const MyProfile = () => {
  return <MypageProfileContainer />;
};
export default withAuth(MyProfile);
