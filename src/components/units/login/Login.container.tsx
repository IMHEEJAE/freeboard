import { useRouter } from "next/router";
import LoginPresenter from "./Login.presenter";
import { useState } from "react";

export default function LoginContainer() {
  const [isRegist, setIsRegist] = useState(false);
  const router = useRouter();
  const onClickHome = () => {
    void router.push("/");
  };
  const onClickScreen = () => {
    setIsRegist((prev) => !prev);
  };
  return (
    <>
      <LoginPresenter
        onClickHome={onClickHome}
        onClickScreen={onClickScreen}
        isRegist={isRegist}
      />
    </>
  );
}
