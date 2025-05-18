import { TodoItemsProps } from "@/types";
import TodoItem from "./TodoItem";

const TodoItems = ({ items, onUpdate }: TodoItemsProps) => {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
};
export default TodoItems;
