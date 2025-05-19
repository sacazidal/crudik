"use client";

import Todo from "@/components/Todo";
import TodoItems from "@/components/TodoItems";
import { TodoType } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("https://crudik-backend.onrender.com/api/todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
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
