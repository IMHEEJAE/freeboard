import * as S from "./Login.styles";
import { ILoginPresenterProps } from "./Login.types";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.LoginInnerWrap>
            <S.HomeIcon onClick={props.onClickHome} />
            <S.Logo>로그인</S.Logo>
            <S.LoginEmail
              id="email"
              type="text"
              onChange={props.onChangeEmail}
              placeholder="이메일을 입력해주세요."
              autoComplete="off"
            />
            <S.LoginPassword
              id="password"
              type="password"
              onChange={props.onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.CheckBoxLogin>자동로그인</S.CheckBoxLogin>
            <S.SubmitButton onClick={props.onClickSubmit}>
              로그인하기
            </S.SubmitButton>
            <S.BottomWrap>
              <S.Line></S.Line>
              <S.FindWrap>
                <S.Option>아이디찾기</S.Option>
                <S.Bar />
                <S.Option>비밀번호찾기</S.Option>
                <S.Bar />
                <S.Option onClick={props.onClickRegistPage}>회원가입</S.Option>
              </S.FindWrap>
            </S.BottomWrap>
          </S.LoginInnerWrap>
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
