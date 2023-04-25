import * as S from "./Login.styles";
import { ILoginPresenterProps } from "./Login.types";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          {!props.isRegist ? (
            <S.LoginInnerWrap>
              <S.HomeIcon onClick={props.onClickHome} />
              <S.Logo>로그인</S.Logo>
              <S.LoginEmail placeholder="이메일을 입력해주세요." />
              <S.LoginPassword placeholder="비밀번호를 입력해주세요." />
              <S.CheckBoxLogin>자동로그인</S.CheckBoxLogin>
              <S.SubmitButton>로그인하기</S.SubmitButton>
              <S.BottomWrap>
                <S.Line></S.Line>
                <S.FindWrap>
                  <S.Option>아이디찾기</S.Option>
                  <S.Bar />
                  <S.Option>비밀번호찾기</S.Option>
                  <S.Bar />
                  <S.Option onClick={props.onClickScreen}>회원가입</S.Option>
                </S.FindWrap>
              </S.BottomWrap>
            </S.LoginInnerWrap>
          ) : (
            <S.RegistInnerWrap>
              <S.LoginButton onClick={props.onClickScreen} />
              <S.Logo>회원가입</S.Logo>
              <S.RegistForm>
                <S.RegistLabel>이메일 </S.RegistLabel>
                <S.RegistInputs placeholder="이메일을 입력해주세요." />
                <S.RegistLabel>이메일 </S.RegistLabel>
                <S.RegistInputs placeholder="이메일을 입력해주세요." />
                <S.RegistLabel>이메일 </S.RegistLabel>
                <S.RegistInputs placeholder="이메일을 입력해주세요." />
                <S.RegistLabel>이메일 </S.RegistLabel>
                <S.RegistInputs placeholder="이메일을 입력해주세요." />
              </S.RegistForm>
            </S.RegistInnerWrap>
          )}
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
