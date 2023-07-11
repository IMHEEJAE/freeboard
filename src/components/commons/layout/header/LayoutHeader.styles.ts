import { Avatar, Dropdown, Modal } from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #eee;
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
  color: #1d267d;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #1d267d;
  cursor: pointer;
`;
export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  .ant-dropdown-menu-item {
    padding: 0 !important;
  }
`;

export const IconDown = styled(CaretDownOutlined)`
  padding-left: 20px;
`;

export const ProfileAvatar = styled(Avatar)`
  color: #fff;
  background: #5c469c;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  border: 1px solid #000;
  border-radius: 50%;
`;
export const UserProfile = styled(UserOutlined)``;

export const ProfileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 24px;
  width: 230px;
  border-bottom: 1px solid #000;
`;
export const ProfileIconWrap = styled.div`
  position: relative;
`;
export const ProfileSetting = styled.div`
  background: url(../../../../../images/icon/icon_setting.svg) no-repeat 50%
    100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  left: 25px;
`;
export const ProfileHeaderDetail = styled.div`
  padding-left: 12px;
  font-weight: bold;
`;
export const ProfileName = styled.div``;
export const ProfileCash = styled.div``;
export const ProfileDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
  padding: 0;
`;
export const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileCashWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 24px;
`;
export const ProfileLogoutWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
`;
export const ProfileCashIcon = styled.div`
  background: url(../../../../../images/icon/icon_cash.svg) no-repeat 50% 100%;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;
export const ProfileLogoutIcon = styled.div`
  background: url(../../../../../images/icon/icon_logout.svg) no-repeat 50% 100%;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;
export const ProfileDesc = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  font-weight: bold;
`;
export const ProfileDropdown = styled(Dropdown)`
  color: #5c469c;
`;
export const PointModal = styled(Modal)`
  .ant-modal-content {
    padding: 40px 30px;
  }

  .ant-modal-footer {
    display: none;
  }
`;
