import * as S from "./../../board/list/BoardList.styles";
import { IMyfirebaseListPresenterProps } from "./MyfirebaseList.types";
import { v4 as uuidv4 } from "uuid";

export default function MyfirebaseListPresenter(
  props: IMyfirebaseListPresenterProps
) {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Header>firebase 게시판</S.Header>
        <S.BoardList>
          <S.BoardTable>
            <S.Thead>
              <S.Tr>
                <S.ThHeaderNum>번호</S.ThHeaderNum>
                <S.ThHeaderTitle>제목</S.ThHeaderTitle>
                <S.ThHeaderWriter>내용</S.ThHeaderWriter>
                <S.ThHeaderDate>작성자</S.ThHeaderDate>
              </S.Tr>
            </S.Thead>
            {props.dataBoards?.map((el: any, index: number) => (
              <S.TBody key={uuidv4()}>
                <S.Tr>
                  <S.Th>{index + 1}</S.Th>
                  <S.ThTitle>{el.title}</S.ThTitle>
                  <S.Th>{el.contents}</S.Th>
                  <S.Th>{el.writer}</S.Th>
                </S.Tr>
              </S.TBody>
            ))}
          </S.BoardTable>
        </S.BoardList>
        <S.BoardFooter style={{ justifyContent: "flex-end" }}>
          <S.EditBtn onClick={props.onClickMoveToBoardNew}>
            <S.EditIcon src="/images/icon/icon_edit.svg" /> 게시물 등록하기
          </S.EditBtn>
        </S.BoardFooter>
      </S.Card>
    </S.Wrapper>
  );
}
