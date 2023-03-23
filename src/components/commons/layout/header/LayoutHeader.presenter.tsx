import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
export default function LayoutHeaderPresenter(props: ILayoutHeaderProps) {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo onClick={props.onClickLogo}>Logo</S.InnerLogo>
          <div>
            <S.InnerButton onClick={props.onClickLogin}>로그인</S.InnerButton>
            <S.InnerButton>회원가입</S.InnerButton>
          </div>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
