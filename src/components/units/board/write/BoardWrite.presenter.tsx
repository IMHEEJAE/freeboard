import * as S from "./BoardWrite.styles";
import { BoardWritePresenterProps } from "./BoardWrite.types";
export default function BoardWritePresenter(props: BoardWritePresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>게시글 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.WriterWrap>
          <S.WriterBox>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.ErrorMessage>{props.nameError}</S.ErrorMessage>
          </S.WriterBox>
          <S.WriterBox>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 적어주세요."
              onChange={props.onChangePassword}
            />
            <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
          </S.WriterBox>
        </S.WriterWrap>
        <S.InputWrap>
          <S.Label>제목</S.Label>
          <S.Writer
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>내용</S.Label>
          <S.Textarea
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>주소</S.Label>
          <S.ZipWrap>
            <S.ZipCode
              type="text"
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
              }
            />
            <S.ZipCodeBtn onClick={props.onClickAddressSearch}>
              우편번호 검색
            </S.ZipCodeBtn>
          </S.ZipWrap>
          <S.InputBox
            readOnly
            value={
              props.address ||
              (props.data?.fetchBoard.boardAddress?.address ?? "")
            }
          />
          <S.InputBox
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </S.InputWrap>
        <S.InputWrapTop>
          <S.Label>유튜브</S.Label>
          <S.Writer
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.InputWrapTop>
        <S.InputWrapTop>
          <S.Label>사진첨부</S.Label>
          <S.UploadWrap>
            <S.UploadBox>+</S.UploadBox>
            <S.UploadBox>+</S.UploadBox>
            <S.UploadBox>+</S.UploadBox>
          </S.UploadWrap>
        </S.InputWrapTop>
        <S.RadioWrap>
          <S.Label>메인설정</S.Label>
          <S.RadioBtn type="radio" name="radio-button" />
          <S.RadioLabel>유튜브</S.RadioLabel>
          <S.RadioBtn type="radio" name="radio-button" />
          <S.RadioLabel>사진</S.RadioLabel>
        </S.RadioWrap>
        <S.SubmitWrap>
          <S.SubmitBtn
            onClick={props.isEdit ? props.hanldeUpdate : props.handleSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.SubmitWrap>
      </S.Wrapper>
      {props.isOpen && (
        <S.ZipModal visible={true}>
          <S.PostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </S.ZipModal>
      )}
    </>
  );
}
