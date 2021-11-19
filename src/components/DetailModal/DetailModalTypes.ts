import { ComicDetailProps } from "../../pages/List/ListTypes";
export type ModalProps = {
  id?: string;
  closeModal: (state: boolean) => void;
  comicDetail: ComicDetailProps;
};
