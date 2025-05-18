import { TodoItemProps } from "@/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

const TodoItem = ({ item, onUpdate }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const handleToggle = async () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);

    await fetch(`http://localhost:6743/api/todos/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted: newStatus }),
    });

    onUpdate();
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:6743/api/todos/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id }),
    });

    onUpdate();
  };
  return (
    <div className="flex items-center justify-between p-2 md:p-3 bg-neutral-700 rounded-lg">
      <Label className="flex items-center space-x-2 cursor-pointer">
        <Input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggle}
          className="form-checkbox h-4 md:h-5 w-4 md:w-5 text-neural-800"
        />
        <span
          className={`md:text-base text-[13px] ${
            isCompleted ? "line-through text-neutral-500" : ""
          }`}
        >
          {item.title}
        </span>
      </Label>
      <Button size={"icon"} onClick={handleDelete}>
        <Trash2Icon />
      </Button>
    </div>
  );
};
export default TodoItem;
