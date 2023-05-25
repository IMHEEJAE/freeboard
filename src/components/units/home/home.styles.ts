import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar, Card } from "antd";

export const Title = styled.h2`
  padding: 80px 0 40px;
`;
export const CardWrap = styled.div`
  display: flex;
`;
export const CardBox = styled(Card)`
  width: 280px;
  height: 260px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 12px;

  .ant-card-body {
    padding: 0;
  }
`;

export const CardImageWrap = styled.div`
  height: 120px;
  width: 100%;
  background: url(/images/no_image.png) no-repeat;
  background-size: 100% 100%;
`;
export const CardImageTemp = styled.div``;
export const CardImage = styled.div`
  width: 100%;
  height: 100%;
`;
export const Image = styled.img`
  height: 120px;
  width: 100%;
`;
export const CardContents = styled.div`
  border-top: 1px solid #bdbdbd;
  padding: 20px;
`;
export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const CardProfileWrap = styled.div``;
export const CardProfileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
export const CardProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const CardProfileName = styled.div``;
export const CardProfileBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardProfileDate = styled.div`
  font-size: 12px;
  color: #828282;
`;
export const CardProfileLike = styled.div`
  margin-right: 5px;
`;
export const ProfileAvatar = styled(Avatar)`
  margin-right: 6px;
`;
export const UserProfile = styled(UserOutlined)``;
export const CardProfileLikeIcon = styled(LikeOutlined)`
  display: flex;
  font-size: 24px;
  color: #d4adfc;
`;
