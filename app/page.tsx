"use client";

import Todo from "@/components/Todo";
import TodoItems from "@/components/TodoItems";
import { TodoType } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:6743/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-lg md:text-2xl font-bold text-center mb-5">
          Мои задачи
        </h2>
        <Todo onAdd={fetchTodos} />
        <TodoItems items={todos} onUpdate={fetchTodos} />
      </div>
    </>
  );
}
