export type ControllerUpdateTaskModalType = {
  setEditTaskIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  task: {
    title: string;
    content: string;
    id: number;
    finished: boolean;
    category: {
      name: string;
      id: number;
    };
  };
};
