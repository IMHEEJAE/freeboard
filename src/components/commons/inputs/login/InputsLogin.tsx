import * as S from "./InputsLogin.styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputsLoginProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
  autoComplete?: "on" | "off";
}

export default function InputsLogin(props: IInputsLoginProps) {
  return (
    <>
      <S.InputsLogin
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
      />
    </>
  );
}
