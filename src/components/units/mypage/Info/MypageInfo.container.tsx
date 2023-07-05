import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MyPageInfoPresenter from "./MypageInfo.presenter";

export default function MyPageInfoContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <MyPageInfoPresenter onClickMoveToPage={onClickMoveToPage} />
    </>
  );
}
