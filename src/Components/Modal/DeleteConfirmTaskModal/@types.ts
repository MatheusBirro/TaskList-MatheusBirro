export type ControllerContentModalType = {
  setDeleteConfirmTaskIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  task: {
    id: number;
    title: string;
    content: string;
    finished: boolean;
    category: {
        id: number;
        name: string;
    };
}
};
