import styled from "@emotion/styled";
import { IButtonLoginStyleProps } from "./ButtonsLogin.types";
export const ButtonsLogin = styled.button`
  display: block;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  border: none;
  margin-top: 20px;
  background: ${(props: IButtonLoginStyleProps) =>
    props.isActive ? "#291473" : "#4f4f4f"};
  :hover {
    background: ${(props: IButtonLoginStyleProps) =>
      props.isActive ? "#3300ff !important" : "#4f4f4f !important"};
    border-color: ${(props: IButtonLoginStyleProps) =>
      props.isActive ? "#3300ff !important" : "#4f4f4f !important"};
  }
  span {
    color: #bdbdbd;
  }
`;
