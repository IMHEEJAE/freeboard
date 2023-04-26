import { useRouter } from "next/router";
import LoginPresenter from "./Login.presenter";
import { useState, useEffect, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Login.queries";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";

export default function LoginContainer() {
  const router = useRouter();
  const [isRegist, setIsRegist] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const onClickHome = () => {
    void router.push("/");
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
    // 수정예정
    if (!inputs.email) {
      setErrorEmail("이메일을 입력해주세요.");
    } else if (!inputs.email.includes("@")) {
      setErrorEmail("올바른 이메일을 입력해주세요.(@가 없습니다.)");
    } else {
      setErrorEmail("");
    }

    if (!inputs.name) {
      setErrorName("이름을 입력해주세요.");
    }

    if (!inputs.password) {
      setErrorPassword("비밀번호를 입력해주세요.");
    } else if (inputs.password !== passwordConfirm) {
      setErrorPasswordConfirm("비밀번호 틀림");
    } else {
      setErrorPassword("");
      setErrorPasswordConfirm("");
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      console.log("result", result);
      // 로그인화면
      setIsRegist((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickScreen = () => {
    setIsRegist((prev) => !prev);
  };
  return (
    <>
      <LoginPresenter
        onClickHome={onClickHome}
        onChangePasswordConfirm={onChangePasswordConfirm}
        onChangeInputs={onChangeInputs}
        onClickScreen={onClickScreen}
        onClickRegist={onClickRegist}
        isRegist={isRegist}
        errorEmail={errorEmail}
        errorName={errorName}
        errorPassword={errorPassword}
        errorPasswordConfirm={errorPasswordConfirm}
      />
    </>
  );
}
