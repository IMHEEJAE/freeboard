import {
  Wrapper,
  Card,
  Avatar,
  Header,
  AvatarDate,
  HeaderLeft,
  AvatarInfo,
  Writer,
  HeaderRight,
  IconClip,
  Body,
  Title,
  Contents,
  IconLocation,
  BtnWrap,
  Button,
} from "@/styles/emotion-detail";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardId() {
  const router = useRouter();
  console.log(router.query.boardId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  return (
    <>
      <Wrapper>
        <Card>
          <Header>
            <HeaderLeft>
              <Avatar src="/images/avatar.png" />
              <AvatarInfo>
                <Writer>{data?.fetchBoard.writer}</Writer>
                <AvatarDate>{data?.fetchBoard.createdAt}</AvatarDate>
              </AvatarInfo>
            </HeaderLeft>
            <HeaderRight>
              <IconClip src="/images/icon/icon_clip.svg" />
              <IconLocation src="/images/icon/icon_location.svg" />
            </HeaderRight>
          </Header>
          <Body>
            <Title>{data?.fetchBoard.title}</Title>
            <Contents>{data?.fetchBoard.contents}</Contents>
          </Body>
        </Card>
        <BtnWrap>
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </BtnWrap>
      </Wrapper>
    </>
  );
}
