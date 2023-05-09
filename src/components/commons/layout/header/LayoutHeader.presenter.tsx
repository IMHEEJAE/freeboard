import { gql, useQuery } from "@apollo/client";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { IQuery } from "../../../../commons/types/generated/types";
import { MenuProps } from "antd";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export default function LayoutHeaderPresenter(props: ILayoutHeaderProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
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
            <S.ProfileName>{data?.fetchUserLoggedIn.name}</S.ProfileName>
            <S.ProfileCash>10,000P</S.ProfileCash>
          </S.ProfileHeaderDetail>
        </S.ProfileMenuHeader>
      ),
    },

    {
      key: "2",
      label: (
        <S.ProfileCashWrap>
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
        <S.ProfileLogoutWrap>
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
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo onClick={props.onClickLogo}>Logo</S.InnerLogo>
          {/* 작업중임시 */}
          {data?.fetchUserLoggedIn.name ? (
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
      </S.Wrapper>
    </>
  );
}
