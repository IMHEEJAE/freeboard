import styled from "@emotion/styled";
import { Button } from "antd";
export const Wrapper = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const Label = styled.div`
  font-weight: bold;
  width: 200px;
  margin-right: 60px;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 15px;
`;

export const BtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;
export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 16px;
  :hover {
    border-color: #d4adfc !important;
    color: #d4adfc !important;
  }
`;
export const NameWrapper = styled.div`
  margin-top: 80px;
`;
