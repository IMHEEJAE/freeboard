import styled from "@emotion/styled";
import { Button } from "antd";

export const PointWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PointIcon = styled.img`
  display: block;
  margin-top: 20px;
`;
export const PointTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 40px 0;
`;
export const PointInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  padding: 10px;
  margin-top: 20px;
  :focus {
    outline: none;
  }
`;
export const PointBtn = styled(Button)`
  width: 100%;
  height: 52px;
  margin-top: 20px;
  background: #bdbdbd;
  font-weight: bold;
  color: #fff;
  :active,
  :hover {
    color: #fff !important;
    border-color: #000 !importaznt;
    background: #000;
  }
`;
