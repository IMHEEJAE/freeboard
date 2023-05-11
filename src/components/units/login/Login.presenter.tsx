import * as S from "./Login.styles";
import { ILoginPresenterProps } from "./Login.types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputsLogin from "../../commons/inputs/login/InputsLogin";
import Validation01 from "../../commons/validations/01/Validation01";
import ButtonsLogin from "../../commons/buttons/login/ButtonsLogin";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호를 입력해주세요"),
});
interface IFormData {
  email: string;
  password: string;
}
export default function LoginPresenter(props: ILoginPresenterProps) {
  const { register, handleSubmit, formState, control } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.LoginInnerWrap>
            <S.HomeIcon onClick={props.onClickHome} />
            <S.Logo>로그인</S.Logo>
            <form onSubmit={handleSubmit(onClickSubmit)}>
              {/* <InputsLoginPresenter
                type="text"
                onChange={props.onChangeEmail}
                placeholder="이메일을 입력해주세요."
                autoComplete="off"
                register={register("email")}
              />
              <div>{formState.errors.email?.message}</div>
              <InputsLoginPresenter
                type="password"
                onChange={props.onChangePassword}
                placeholder="비밀번호를 입력해주세요."
                register={register("password")}
              />
              <div>{formState.errors.password?.message}</div>
              <S.CheckBoxLogin>자동로그인</S.CheckBoxLogin>
              <S.SubmitButton
                onClick={props.onClickSubmit}
                isActive={props.isEdit ? true : props.isActive}
                isActive={formState.isValid}
              >
                로그인하기
              </S.SubmitButton> */}

              <InputsLogin
                type="text"
                register={register("email")}
                placeholder="이메일을 입력해주세요."
                autoComplete="off"
              />

              <Validation01 title={formState.errors.email?.message} />
              <InputsLogin
                type="password"
                register={register("password")}
                placeholder="비밀번호를 입력해주세요."
              />
              <Validation01 title={formState.errors.password?.message} />
              <S.CheckBoxLogin>자동로그인</S.CheckBoxLogin>
              <ButtonsLogin title="등록하기" isActive={formState.isValid} />
            </form>
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
