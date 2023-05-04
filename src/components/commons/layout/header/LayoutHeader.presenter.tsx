import { gql, useQuery } from "@apollo/client";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { IQuery } from "../../../../commons/types/generated/types";
import { UserOutlined } from "@ant-design/icons";
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
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo onClick={props.onClickLogo}>Logo</S.InnerLogo>
          {data?.fetchUserLoggedIn.name ? (
            <>
              <UserOutlined /> <>{data?.fetchUserLoggedIn.name}</>
            </>
          ) : (
            <div>
              <S.InnerButton onClick={props.onClickLogin}>로그인</S.InnerButton>
              <S.InnerButton>회원가입</S.InnerButton>
            </div>
          )}

          {/* {data?.fetchUserLoggedIn.name} */}
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
