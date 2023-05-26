import { HeartFilled, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { IMatched } from "./MarketList.types";
export const Title = styled.h2`
  padding: 80px 0 40px;
`;
export const List = styled.ul`
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  min-width: 1200px;
  /* height: 100%; */
  margin: 0 auto;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
  :last-child {
    border-bottom: none;
  }
`;
export const ListLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const ListRight = styled.div`
  display: flex;
  align-items: center;
  line-height: 35px;
  font-weight: 700;
  font-size: 24px;
`;
export const IconMoney = styled.img`
  margin-right: 10px;
`;
export const ImageWrap = styled.div`
  width: 160px;
  height: 160px;
  background: url(/images/no_image.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 160px;
  height: 160px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const ItemTitle = styled.span`
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 3px;
  height: 36px;
`;
export const Desc = styled.span`
  color: #4f4f4f;
  margin-bottom: 5px;
  height: 24px;
`;
export const Tags = styled.span`
  color: #bdbdbd;
  line-height: 24px;
  font-size: 14px;
  height: 24px;
`;
export const SellerWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const SellerAvatar = styled(Avatar)`
  margin-right: 5px;
`;
export const SllerAvatarUser = styled(UserOutlined)``;
export const Seller = styled.span`
  margin-right: 5px;
`;
export const LickCount = styled(HeartFilled)`
  color: red;
  margin-right: 5px;
`;
export const PickCount = styled.span`
  margin-left: 10px;
`;
export const StrongText = styled.span`
  color: ${(props: IMatched) => (props.isMatched ? "#D4ADFC" : "#000")};
  font-weight: ${(props: IMatched) => (props.isMatched ? "bold" : "normal")};
`;
