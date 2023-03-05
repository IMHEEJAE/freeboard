import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWriteContainer from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function BoardId() {
  return (
    <>
      <BoardDetailContainer />
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </>
  );
}
