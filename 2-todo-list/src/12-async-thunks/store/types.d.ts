export type TTask = {
  id: number;
  text: string;
  isCompleted?: boolean;
};

export type TState = {
  text: string;
  tasks: TTask[];
};

export type TAction = {
  type: string;
  payload?: string | number;
};
