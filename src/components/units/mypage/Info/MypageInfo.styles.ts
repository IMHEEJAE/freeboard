import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  font-weight: bold;
  border-right: 2px solid #000;
  margin-right: 30px;
`;
export const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 40px;
`;
export const ProfileAvatar = styled(Avatar)`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #5c469c;
  font-size: 48px !important;
`;
export const UserProfile = styled(UserOutlined)``;
export const Name = styled.span`
  margin: 20px 0;
  font-size: 24px;
`;
export const Point = styled.div`
  display: flex;
`;
export const Menu = styled.div`
  margin-top: 70px;
  font-size: 18px;
`;
export const MenuCart = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const MenuPoint = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const MenuProfile = styled.div`
  display: flex;
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
