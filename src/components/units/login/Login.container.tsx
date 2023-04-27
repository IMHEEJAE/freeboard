import { useRouter } from "next/router";
import LoginPresenter from "./Login.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER, LOGIN_USER } from "./Login.queries";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function LoginContainer() {
  const router = useRouter();
  const [isRegist, setIsRegist] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickHome = () => {
    void router.push("/");
  };
  const onClickScreen = () => {
    void router.push("./login/regist");
  };
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event?.target.id]: event?.target.value,
    });
    console.log(event.target.value);
    if (event.target.value !== "") {
      setErrorEmail("");
      setErrorName("");
      setErrorPassword("");
    }
  };
  const onChangePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
    if (event.target.value !== "") {
      setErrorPasswordConfirm("");
    }
  };

  const onClickRegist = async () => {
    if (!inputs.email) {
      return setErrorEmail("이메일을 입력해주세요.");
    }
    if (!inputs.email.includes("@")) {
      return setErrorEmail("올바른 이메일을 입력해주세요. (@가 없습니다.)");
    }

    if (!inputs.name) {
      return setErrorName("이름을 입력해주세요.");
    }

    if (!inputs.password) {
      return setErrorPassword("비밀번호를 입력해주세요.");
    }
    if (inputs.password !== passwordConfirm) {
      setErrorPasswordConfirm("비밀번호 틀림");
      return;
    }

    try {
      const registResult = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      console.log("registResult", registResult);
      console.log("inputs", inputs);
      // 로그인화면
      Modal.success({ content: "회원가입 성공" });
      setIsRegist((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSubmit = async () => {
    try {
      const loginResult = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      const accessToken = loginResult.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인을 먼저 해주세요." });
        return;
      }
      setAccessToken(accessToken);
      void router.push("/test");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    setInputs({ ...inputs, email: "", name: "", password: "" });
  };

  return (
    <>
      <LoginPresenter
        onClickHome={onClickHome}
        onChangePasswordConfirm={onChangePasswordConfirm}
        onChangeInputs={onChangeInputs}
        onClickScreen={onClickScreen}
        onClickRegist={onClickRegist}
        onClickSubmit={onClickSubmit}
        isRegist={isRegist}
        errorEmail={errorEmail}
        errorName={errorName}
        errorPassword={errorPassword}
        errorPasswordConfirm={errorPasswordConfirm}
      />
    </>
  );
}
