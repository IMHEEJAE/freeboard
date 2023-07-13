import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AnswerIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 20px;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 20px;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: #999;
  font-size: 14px;
  padding: 10px 0 0 68px;
`;
export const Star = styled(Rate)`
  padding-left: 20px;
`;
