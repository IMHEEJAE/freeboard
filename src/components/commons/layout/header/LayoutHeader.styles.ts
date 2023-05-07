import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #f5f2fc;
`;

export const InnerWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;
export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const IconDown = styled(CaretDownOutlined)`
  padding-left: 20px;
`;
