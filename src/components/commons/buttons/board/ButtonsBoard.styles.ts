import styled from "@emotion/styled";
import { IButtonBoardStyleProps } from "./ButtonsBoard.types";

export const ButtonsBoard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  box-sizing: border-box;
  border: none;
  background: #d4adfc;
  color: ${(props: IButtonBoardStyleProps) =>
    props.isActive ? "#eee" : "#000"};
  font-size: 16px;
  cursor: pointer;
  background: ${(props: IButtonBoardStyleProps) =>
    props.isActive ? "#091E6F" : "#bdbdbd"};
`;
