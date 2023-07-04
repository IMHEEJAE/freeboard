import PointModal from "../../modal/point/PointModal";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { MenuProps } from "antd";
import Head from "next/head";
export default function LayoutHeaderPresenter(props: ILayoutHeaderProps) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <S.ProfileMenuHeader>
          <S.ProfileIconWrap>
            <S.ProfileAvatar icon={<S.UserProfile />} />
            <S.ProfileSetting />
          </S.ProfileIconWrap>
          <S.ProfileHeaderDetail>
            <S.ProfileName>{props.data?.fetchUserLoggedIn.name}</S.ProfileName>
            <S.ProfileCash>
              {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
                "ko-KR"
              )}
              P
            </S.ProfileCash>
          </S.ProfileHeaderDetail>
        </S.ProfileMenuHeader>
      ),
    },

    {
      key: "2",
      label: (
        <S.ProfileCashWrap onClick={props.showPointModal}>
          <S.ProfileMenu>
            <S.ProfileCashIcon />
            <S.ProfileDesc>충전하기</S.ProfileDesc>
          </S.ProfileMenu>
        </S.ProfileCashWrap>
      ),
    },
    {
      key: "3",
      label: (
        <S.ProfileLogoutWrap onClick={props.onClickLogout}>
          <S.ProfileMenu>
            <S.ProfileLogoutIcon />
            <S.ProfileDesc>로그아웃</S.ProfileDesc>
          </S.ProfileMenu>
        </S.ProfileLogoutWrap>
      ),
    },
  ];
  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>

      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo onClick={props.onClickLogo}>Logo</S.InnerLogo>
          {props.data?.fetchUserLoggedIn.name ? (
            <S.ProfileWrap>
              <S.ProfileAvatar icon={<S.UserProfile />} />
              <S.ProfileDropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                trigger={["click"]}
              >
                <S.IconDown />
              </S.ProfileDropdown>
            </S.ProfileWrap>
          ) : (
            <div>
              <S.InnerButton onClick={props.onClickLogin}>로그인</S.InnerButton>
              <S.InnerButton>회원가입</S.InnerButton>
            </div>
          )}
        </S.InnerWrapper>
        {props.isOpen && (
          <S.PointModal visible={true} onCancel={props.showPointModal}>
            <PointModal />
          </S.PointModal>
        )}
      </S.Wrapper>
    </>
  );
}
