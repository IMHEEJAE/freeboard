import { useState } from "react";
import MypageCartPresenter from "./MypageCart.presenter";
import { FETCH_USEDITEM_ISOLD } from "./MypageCart.queries";
import { useQuery } from "@apollo/client";

export default function MypageCartContainer() {
  const [isTab, setIsTab] = useState(false);
  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });
  const onClickSold = () => {
    setIsTab(false);
  };
  const onClickPick = () => {
    setIsTab(true);
  };
  return (
    <>
      <MypageCartPresenter
        data={data}
        isTab={isTab}
        onClickSold={onClickSold}
        onClickPick={onClickPick}
      />
    </>
  );
}
