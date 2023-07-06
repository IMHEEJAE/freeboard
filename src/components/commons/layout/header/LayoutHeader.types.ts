export interface ILayoutHeaderProps {
  data: any;
  onClickMoveToPage: (path: string) => () => void;
  onClickLogin: () => void;
  onClickLogout: () => void;
  isOpen: boolean;
  showPointModal: () => void;
}
