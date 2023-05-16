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
  background: #ffd600;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  background: ${(props: IButtonBoardStyleProps) =>
    props.isActive ? "#ffd600" : "#eee"};
`;
