import InputsBoard from "../../../commons/inputs/board/InputsBoard";
import "react-quill/dist/quill.snow.css";
import * as S from "./MarketWrite.styles";
import { IMarketWritePresenterProps } from "./MarketWrite.types";
import Upload01Container from "../../../commons/uploads/01/Upload01.container";
import { v4 as uuidv4 } from "uuid";
import KakaomapPage from "../../../commons/map";
import ButtonsBoard from "../../../commons/buttons/board/ButtonsBoard";
import Validation01 from "../../../commons/validations/01/Validation01";
export default function MarketWritePresenter(
  props: IMarketWritePresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.FormWrap>
          <form onSubmit={props.handleSubmit}>
            <S.InputWrap>
              <S.Label>상품명</S.Label>
              <InputsBoard
                type="text"
                register={props.register("name")}
                placeholder="상품명을 작성해주세요."
                //   defaultValue={props.data?.fetchBoard.writer ?? ""}
                //   readOnly={!!props.data?.fetchBoard.writer}
              />
              {props.formState.errors.name && (
                <Validation01 title={props.formState.errors.name?.message} />
              )}
              <S.Label>한줄요약</S.Label>
              <InputsBoard
                type="text"
                register={props.register("remark")}
                placeholder="한줄요약을 작성해주세요."
              />
              {props.formState.errors.remark && (
                <Validation01 title={props.formState.errors.remark?.message} />
              )}
              <S.Label>상품설명</S.Label>
              <S.Quill
                onChange={props.onChangeContents}
                // value={props.contents || props.data?.fetchUseditem.contents}
              />
              {props.formState.errors.contents && (
                <Validation01
                  title={props.formState.errors.contents?.message}
                />
              )}
              <S.Label>판매가격</S.Label>
              <InputsBoard
                type="text"
                register={props.register("price")}
                placeholder="판매 가격을 작성해주세요."
              />
              {props.formState.errors.price && (
                <Validation01 title={props.formState.errors.price?.message} />
              )}
              <S.Label>태그입력</S.Label>
              <InputsBoard
                type="text"
                register={props.register("tags")}
                placeholder="#태그 #태그 #태그"
              />{" "}
              {props.formState.errors.tags && (
                <Validation01 title={props.formState.errors.tags?.message} />
              )}
            </S.InputWrap>
            <S.MapWrap>
              <S.MapBox>
                <S.Label>거래위치</S.Label>
                <S.MapImg>
                  <KakaomapPage />
                </S.MapImg>
              </S.MapBox>
              <S.MapDesc>
                <S.Label>GPS</S.Label>
                <S.Gps>
                  <InputsBoard
                    type="text"
                    register={props.register("useditemAddress.lat")}
                    placeholder="위도(LAT)"
                  />
                  <S.GpsIcon src="/images/icon/icon_location.svg" />
                  <InputsBoard
                    type="text"
                    register={props.register("useditemAddress.lng")}
                    placeholder="경도(LNG)"
                  />
                </S.Gps>
                <S.Address>
                  <S.Label>주소</S.Label>
                  <InputsBoard
                    type="text"
                    register={props.register("useditemAddress.address")}
                  />
                  <S.PT20 />
                  <InputsBoard
                    type="text"
                    register={props.register("useditemAddress.addressDetail")}
                  />
                </S.Address>
              </S.MapDesc>
            </S.MapWrap>
            <S.ImgWrap>
              <S.Label>사진첨부</S.Label>
              <S.ImgBox>
                {props.fileUrls.map((el: any, index: any) => (
                  <Upload01Container
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </S.ImgBox>
            </S.ImgWrap>
            <S.SubmitWrap>
              <ButtonsBoard
                // title={props.isEdit ? "수정하기" : "등록하기"}
                title="등록하기"
                isActive={props.formState.isValid}
              />
            </S.SubmitWrap>
          </form>
        </S.FormWrap>
      </S.Wrapper>
    </>
  );
}
