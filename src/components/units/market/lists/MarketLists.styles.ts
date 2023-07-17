import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Card, Tabs } from "antd";
import { IMatched } from "./MarketLists.types";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  position: relative;
`;

export const BestWrap = styled.div`
  padding: 40px 0 80px;
`;

export const BestCard = styled.div`
  display: flex;
`;
export const CardBox = styled(Card)`
  width: 280px;
  overflow: hidden;
  margin: 0 12px;
  border: 2px solid #000;
  background-color: #e0dcd0;
  border-radius: 0;
  :hover {
    border: 2px solid #000;
  }
  .ant-card-body {
    padding: 0;
  }
`;
export const CardImgWrap = styled.div`
  height: 240px;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const CardContent = styled.div`
  padding: 20px;
  border-top: 2px solid #000;
`;
export const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
`;
export const Remark = styled.span`
  font-size: 12px;
  color: #828282;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
`;
export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
export const LickBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LickIcon = styled(HeartFilled)`
  color: #ba664c;
`;
export const LickCountBest = styled.span`
  font-size: 12px;
  color: #828282;
`;

export const ListWrap = styled.div``;
export const MainTitle = styled.h2`
  margin: 40px auto;
  text-align: center;
`;
export const List = styled.div`
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  min-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: auto;
`;
export const ScrollWrap = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid #000;
  border-bottom: none;
  :last-child {
    border-bottom: 2px solid #000;
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
  color: #828282;
  line-height: 24px;
  font-size: 14px;
  height: 24px;
`;
export const SellerWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;
export const Seller = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
export const LickCount = styled(HeartFilled)`
  color: #ba664c;
  margin-right: 5px;
`;
export const PickCount = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
export const StrongText = styled.span`
  color: ${(props: IMatched) => (props.isMatched ? "#D4ADFC" : "#000")};
  font-weight: ${(props: IMatched) => (props.isMatched ? "bold" : "normal")};
`;
export const Tabss = styled(Tabs)`
  padding: 0 0 20px;
`;
export const InfiniScroll = styled(InfiniteScroll)``;
export const Bottom = styled.div`
  display: flex;
  margin-bottom: 100px;
  justify-content: flex-end;
`;
export const EditBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 16px;
  background: #e0dcd0;
  border: 2px solid #000;
  border-radius: 0;
  :hover {
    border-color: #ba664c !important;
    color: #ba664c !important;
  }
`;
export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
