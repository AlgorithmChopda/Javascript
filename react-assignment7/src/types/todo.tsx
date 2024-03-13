export type todo = {
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  isCompleted: boolean;
};

export type ITodoInput = {
  todo: string;
  completed: boolean;
  userId: number;
};
