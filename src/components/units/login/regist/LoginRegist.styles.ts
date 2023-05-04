import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { ILoginRegistBtnProps } from "./LoginRegist.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 1080px;
  min-height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(/images/BG_login.png) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

export const Inner = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 32px;
  padding-bottom: 80px;
  margin: 0 auto;
`;

export const SubmitButton = styled(Button)`
  // background: #4f4f4f;
  background: ${(props: ILoginRegistBtnProps) =>
    props.isActive ? "#291473" : "#4f4f4f"};
  height: 64px;
  border-radius: 16px;
  border: none;
  margin-top: 20px;
  :hover {
    background: ${(props: ILoginRegistBtnProps) =>
      props.isActive ? "#3300ff !important" : "#4f4f4f !important"};
    border-color: ${(props: ILoginRegistBtnProps) =>
      props.isActive ? "#3300ff !important" : "#4f4f4f !important"};
  }
  span {
    color: #bdbdbd;
  }
`;

export const LoginButton = styled(CloseOutlined)`
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 80px;
  right: 80px;
`;
export const RegistInnerWrap = styled.div`
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  flex-direction: column;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding-top: 240px;
`;
export const RegistForm = styled.div``;
export const RegistInputs = styled(Input)`
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 16px;
  height: 64px;
  background: transparent;
  color: #fff;
  margin: 20px 0 10px;
  :hover,
  :focus {
    border-color: #5729ff !important;
    box-shadow: none !important;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;
export const RegistLabel = styled.label`
  color: #fff;
  font-size: 14px;
`;
export const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 10px;
`;
