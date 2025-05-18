export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export interface TodoProps {
  onAdd: () => void;
}

export interface TodoItemsProps {
  items: TodoType[];
  onUpdate: () => void;
}

export interface TodoItemProps {
  item: TodoType;
  onUpdate: () => void;
}
