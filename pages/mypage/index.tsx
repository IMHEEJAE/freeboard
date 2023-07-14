import { withAuth } from "../../src/components/commons/hoc";
import MypageAvatarContainer from "../../src/components/units/mypage/contents/avatar/MypageAvatar.container";

const Mypage = () => {
  return <MypageAvatarContainer />;
};
export default withAuth(Mypage);
