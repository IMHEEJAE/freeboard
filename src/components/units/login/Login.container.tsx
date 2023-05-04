import { useRouter } from "next/router";
import LoginPresenter from "./Login.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { ILoginContainerProps } from "./Login.types";

export default function LoginContainer(props: ILoginContainerProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickHome = () => {
    void router.push("/");
  };
  const onClickRegistPage = () => {
    void router.push("./login/regist");
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value !== "") {
      setErrorEmail("");
    }

    if (event.target.value && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setErrorPassword("");
    }
    if (email && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    if (!email || !password) {
      return Modal.error({ content: "정보를 입력해주세요." });
    }
    try {
      const loginResult = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = loginResult.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인 실패. 다시 시도해 주세요." });
        return;
      }
      setAccessToken(accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LoginPresenter
        isActive={isActive}
        isEdit={props.isEdit}
        onClickHome={onClickHome}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickRegistPage={onClickRegistPage}
        onClickSubmit={onClickSubmit}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
      />
    </>
  );
}
