"use client";

import { TodoProps } from "@/types";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Todo = ({ onAdd }: TodoProps) => {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!title.trim()) return;

      setLoading(true);

      await fetch("https://crudik-backend.onrender.com/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      setTitle("");
      onAdd();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Новая задача"
        className="w-full p-2 border rounded-sm md:rounded-lg md:placeholder:text-base placeholder:text-sm md:h-9 h-7"
      />
      {loading ? (
        <Button
          type="submit"
          className="mt-2 md:h-full h-7 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 md:text-base text-sm"
          disabled={loading}
        >
          Добавляю...
        </Button>
      ) : (
        <Button
          type="submit"
          className="mt-2 md:h-full h-7 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 md:text-base text-sm"
          disabled={loading}
        >
          Добавить
        </Button>
      )}
    </form>
  );
};
export default Todo;
