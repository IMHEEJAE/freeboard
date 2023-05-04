import { ChangeEvent, useState } from "react";
import LoginRegistPresenter from "./LoginRegist.presenter";
import { CREATE_USER } from "./LoginRegist.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

import { ILoginRegistContainerProps } from "./LoginRegist.types";
export default function LoginRegistContainer(
  props: ILoginRegistContainerProps
) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");

  const onClickLoginPage = () => {
    void router.push("/login");
  };

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setErrorEmail("");
    }
    // 이메일 유효성 검사
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(event.target.value);
    if (!emailRegex.test(event.target.value)) {
      setErrorEmail("이메일 형식이 틀렸습니다.");
    }

    // 회원가입 버튼 active
    if (event.target.value && name && password && passwordConfirm) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setErrorName("");
    }
    if (email && event.target.value && password && passwordConfirm) {
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
    if (email && name && event.target.value && passwordConfirm) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
    if (event.target.value !== "") {
      setErrorPasswordConfirm("");
    }
    if (email && name && password && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickRegist = async () => {
    if (!email) {
      return setErrorEmail("이메일을 입력해주세요.");
    }
    if (!email.includes("@")) {
      return setErrorEmail("올바른 이메일을 입력해주세요. (@가 없습니다.)");
    }

    if (!name) {
      return setErrorName("이름을 입력해주세요.");
    }

    if (!password) {
      return setErrorPassword("비밀번호를 입력해주세요.");
    }
    if (password !== passwordConfirm) {
      setErrorPasswordConfirm("비밀번호 틀림");
      return;
    }

    try {
      const registResult = await createUser({
        variables: {
          createUserInput: {
            email,
            name,
            password,
          },
        },
      });
      console.log("registResult", registResult);
      // 로그인화면
      Modal.success({ content: "회원가입 성공" });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LoginRegistPresenter
        isActive={isActive}
        isEdit={props.isEdit}
        errorEmail={errorEmail}
        errorName={errorName}
        errorPassword={errorPassword}
        errorPasswordConfirm={errorPasswordConfirm}
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangePasswordConfirm={onChangePasswordConfirm}
        onClickLoginPage={onClickLoginPage}
        onClickRegist={onClickRegist}
      />
    </>
  );
}
