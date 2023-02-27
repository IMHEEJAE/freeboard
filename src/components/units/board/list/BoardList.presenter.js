import { getDate } from "@/src/commons/utils/utils";
import * as S from "./BoardList.styles";

export default function BoardListPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.Card>
          <S.BoardList>
            <S.BoardTable>
              <S.Thead>
                <S.Tr>
                  <S.ThHeaderNum>번호</S.ThHeaderNum>
                  <S.ThHeaderTitle>제목</S.ThHeaderTitle>
                  <S.ThHeaderWriter>작성자</S.ThHeaderWriter>
                  <S.ThHeaderDate>날짜</S.ThHeaderDate>
                </S.Tr>
              </S.Thead>
              {props.data?.fetchBoards.map((el, index) => (
                <S.TBody key={el._id}>
                  <S.Tr>
                    <S.Th>{String(el._id).slice(-4)}</S.Th>
                    <S.ThTitle id={el._id} onClick={props.onClickDetail}>
                      {el.title}
                    </S.ThTitle>
                    <S.Th>{el.writer}</S.Th>
                    <S.Th>{getDate(el.createdAt)}</S.Th>
                  </S.Tr>
                </S.TBody>
              ))}
            </S.BoardTable>
          </S.BoardList>
          <S.BoardFooter>
            <S.EditBtn onClick={props.onClickBoardNew}>
              <S.EditIcon src="/images/icon/icon_edit.svg" /> 게시물 등록하기
            </S.EditBtn>
          </S.BoardFooter>
        </S.Card>
      </S.Wrapper>
    </>
  );
}
