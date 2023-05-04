import * as S from "./LoginRegist.styles";
import { ILoginRegistPresenterProps } from "./LoginRegist.types";
export default function LoginRegistPresenter(
  props: ILoginRegistPresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.RegistInnerWrap>
            <S.LoginButton onClick={props.onClickLoginPage} />
            <S.Logo>회원가입</S.Logo>
            <S.RegistForm>
              <S.RegistLabel>이메일 </S.RegistLabel>
              <S.RegistInputs
                id="email"
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={props.onChangeEmail}
                autoComplete="off"
              />
              <S.ErrorMessage>{props.errorEmail}</S.ErrorMessage>
              <S.RegistLabel>이름 </S.RegistLabel>
              <S.RegistInputs
                id="name"
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={props.onChangeName}
                autoComplete="off"
              />
              <S.ErrorMessage>{props.errorName}</S.ErrorMessage>
              <S.RegistLabel>비밀번호 </S.RegistLabel>
              <S.RegistInputs
                id="password"
                type="password"
                placeholder="비밀번호을 입력해주세요."
                onChange={props.onChangePassword}
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

            <S.SubmitButton
              onClick={props.onClickRegist}
              isActive={props.isEdit ? true : props.isActive}
            >
              회원가입하기
            </S.SubmitButton>
          </S.RegistInnerWrap>
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
