import * as S from "./MypageInfo.styles";
import { IMyPageInfoPresenterProps } from "./MypageInfo.types";
export default function MyPageInfoPresenter(props: IMyPageInfoPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>MYPAGE</S.Title>
        <S.ProfileAvatar icon={<S.UserProfile />} />
        <S.Name>노원두</S.Name>
        <S.Point>
          <S.Icon src="/images/icon/icon_mypage_point.svg" />
          1000원
        </S.Point>
        <S.Menu>
          <S.MenuCart onClick={props.onClickMoveToPage(`./mypage/mycart`)}>
            <S.Icon src="/images/icon/icon_mypage_cart.svg" />내 장터
          </S.MenuCart>
          <S.MenuPoint onClick={props.onClickMoveToPage(`./mypage/mypoint`)}>
            <S.Icon src="/images/icon/icon_mypage_mypoint.svg" />내 포인트
          </S.MenuPoint>
          <S.MenuProfile
            onClick={props.onClickMoveToPage(`./mypage/myprofile`)}
          >
            <S.Icon src="/images/icon/icon_mypage_profile.svg" />내 프로필
          </S.MenuProfile>
        </S.Menu>
      </S.Wrapper>
    </>
  );
}
