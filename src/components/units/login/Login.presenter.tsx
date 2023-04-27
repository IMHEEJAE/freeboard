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
              <S.LoginEmail
                id="email"
                type="text"
                onChange={props.onChangeInputs}
                placeholder="이메일을 입력해주세요."
                autoComplete="off"
              />
              <S.LoginPassword
                id="password"
                type="password"
                onChange={props.onChangeInputs}
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
                  <S.Option onClick={props.onClickScreen}>회원가입</S.Option>
                </S.FindWrap>
              </S.BottomWrap>
            </S.LoginInnerWrap>
          ) : (
            <S.RegistInnerWrap>
              <S.LoginButton />
              <S.Logo>회원가입</S.Logo>
              <S.RegistForm>
                <S.RegistLabel>이메일 </S.RegistLabel>
                <S.RegistInputs
                  id="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  onChange={props.onChangeInputs}
                  autoComplete="off"
                />
                <S.ErrorMessage>{props.errorEmail}</S.ErrorMessage>
                <S.RegistLabel>이름 </S.RegistLabel>
                <S.RegistInputs
                  id="name"
                  type="text"
                  placeholder="이름을 입력해주세요."
                  onChange={props.onChangeInputs}
                  autoComplete="off"
                />
                <S.ErrorMessage>{props.errorName}</S.ErrorMessage>
                <S.RegistLabel>비밀번호 </S.RegistLabel>
                <S.RegistInputs
                  id="password"
                  type="password"
                  placeholder="비밀번호을 입력해주세요."
                  onChange={props.onChangeInputs}
                />
                <S.ErrorMessage>{props.errorPassword}</S.ErrorMessage>
                <S.RegistLabel>비밀번호 확인 </S.RegistLabel>
                <S.RegistInputs
                  id="passwordConfirm"
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요."
                  onChange={props.onChangePasswordConfirm}
                />
                <S.ErrorMessage>{props.errorPasswordConfirm}</S.ErrorMessage>
              </S.RegistForm>

              <S.SubmitButton onClick={props.onClickRegist}>
                회원가입하기
              </S.SubmitButton>
            </S.RegistInnerWrap>
          )}
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
