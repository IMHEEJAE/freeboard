import { Card } from "antd";
import { IHomePresenterProps } from "./home.types";
import * as S from "./home.styles";
export default function HomePresenter(props: IHomePresenterProps) {
  return (
    <>
      {/* {props.data?.fetchBoardsOfTheBest.map((el: any) => (
        <div key={el._id}>
          
        </div>
      ))} */}
      <S.CardWrap>
        {props.data?.fetchBoardsOfTheBest.map((el: any) => (
          <div key={el._id}>
            <Card hoverable style={{ width: 240 }}>
              <br />
              <span>{el.title}</span>
            </Card>
          </div>
        ))}
      </S.CardWrap>
    </>
  );
}
