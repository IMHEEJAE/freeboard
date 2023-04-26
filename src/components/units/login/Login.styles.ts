import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Checkbox, Input } from "antd";

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
export const HomeIcon = styled(ArrowRightOutlined)`
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 80px;
  right: 80px;
`;
export const LoginInnerWrap = styled.div`
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  flex-direction: column;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding-top: 240px;
`;
export const Logo = styled.h2`
  color: #fff;
  font-size: 32px;
  padding-bottom: 80px;
  margin: 0 auto;
`;
export const LoginEmail = styled(Input)`
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 16px;
  height: 64px;
  background: transparent;
  color: #fff;
  :hover,
  :focus {
    border-color: #5729ff !important;
    box-shadow: none !important;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const LoginPassword = styled(Input)`
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 16px;
  height: 64px;
  background: transparent;
  color: #fff;
  margin-top: 20px;
  :hover,
  :focus {
    border-color: #5729ff !important;
    box-shadow: none !important;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;
export const CheckBoxLogin = styled(Checkbox)`
  color: #fff;
  cursor: initial;
  user-select: none;
  margin: 20px 0;
  .ant-checkbox-inner {
    border-radius: 50%;
    background-color: transparent;
  }
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: #5729ff !important;
      border-color: #5729ff;
    }
  }

  .ant-checkbox-checked:after {
    border: none !important;
    background-color: transparent;
  }
`;

export const SubmitButton = styled(Button)`
  background: #4f4f4f;
  height: 64px;
  border-radius: 16px;
  border: none;
  margin-top: 20px;
  :hover {
    background: #291473 !important;
    border-color: #291473 !important;
  }
  span {
    color: #bdbdbd;
  }
`;
export const BottomWrap = styled.div`
  padding-top: 40px;
`;
export const Line = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: #fff;
`;
export const FindWrap = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 20px;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
`;
export const Option = styled.li`
  position: relative;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  :hover {
    font-weight: 600;
  }
`;
export const Bar = styled.li`
  display: block;
  width: 1px;
  height: 16px;
  background: #fff;
  margin-top: 2px;
  color: #fff;
`;

// ***************** 회원가입 ********************

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
