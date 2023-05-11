import { IButtonsLoginProps } from "../../inputs/login/InputsLogin.types";
import * as S from "./ButtonsLogin.styles";

export default function ButtonsLogin(props: IButtonsLoginProps) {
  return (
    <>
      <S.ButtonsLogin style={{ background: props.isActive ? "red" : "blue" }}>
        {props.title}
      </S.ButtonsLogin>
    </>
  );
}
