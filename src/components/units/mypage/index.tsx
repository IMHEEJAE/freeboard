import styled from "@emotion/styled";
import MyPageInfoContainer from "./Info/MypageInfo.container";
import { useRouter } from "next/router";
import MypageCartContainer from "./contents/cart/MypageCart.container";
import MypagePointContainer from "./contents/point/MypagePoint.container";
import MypageProfileContainer from "./contents/profile/MypageProfile.container";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 100%;
  padding: 80px 0;
`;
const Contents = styled.div`
  width: 100%;
`;
interface IProps {
  children: JSX.Element;
}

const HIDDEN_CART = ["/mypage/mycart"];
const HIDDEN_POINT = ["/mypage/mycart", "/mypage/mypoint", "/mypage"];
const HIDDEN_INFO = ["/mypage"];
export default function MypageBody(props: IProps) {
  const router = useRouter();
  const isHiddenCart = HIDDEN_CART.includes(router.asPath);
  const isHiddenPoint = HIDDEN_POINT.includes(router.asPath);
  const isHiddenInfo = HIDDEN_INFO.includes(router.asPath);
  return (
    <>
      <Wrapper>
        <MyPageInfoContainer />
        <Contents>
          {!isHiddenCart && <MypageCartContainer />}
          {!isHiddenPoint && <MypagePointContainer />}
          {!isHiddenInfo && <MypageProfileContainer />}   
        </Contents>
        {props.children}
      </Wrapper>
    </>
  );
}
