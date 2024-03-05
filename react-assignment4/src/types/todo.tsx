export type todo = {
  title: string;
  dueDate: string;
  isCompleted: boolean;
};

export type ITodoInput = {
  todo: string;
  completed: boolean;
  userId: number;
};
