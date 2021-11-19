export type EmailModalProps = {
  id?: string;
  closeModal: (state: boolean) => void;
  selecteds: any;
  onSubmit?: (e: any) => void;
};
