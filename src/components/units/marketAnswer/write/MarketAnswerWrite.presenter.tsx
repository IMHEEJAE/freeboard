import {
  Wrapper,
  Arrow,
  InputCommentBox,
  CommentInput,
  CommentInfo,
  CommentCountInput,
} from "./MarketAnswerWrite.styles";
import { IMarketAnswerWritePresenterProps } from "./MarketAnswerWrite.types";
export default function MarketAnswerWritePresenter(
  props: IMarketAnswerWritePresenterProps
) {
  return (
    <>
      <Wrapper>
        <Arrow src="/images/answerarrow.png" />
        <InputCommentBox>
          <CommentInput type="text" onChange={props.onChangeContents} />
          <CommentInfo>
            <CommentCountInput></CommentCountInput>
            <button>asda0</button>
          </CommentInfo>
        </InputCommentBox>
      </Wrapper>
    </>
  );
}
