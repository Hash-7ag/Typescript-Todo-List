import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos(){
   const [todos, setTodos] = useState(() => {
      const saveTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
      return saveTodos.length > 0 ? saveTodos : dummyData
   });

   useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos])

   // const [listWay, setlistWay] = useState(true);

   // function toggleListWay(){
   //    return setlistWay(prev => !prev);
   // }

   function setTodoCompleted(id: number, completed: boolean) {
      // alert(`Todo with id: ${id} is now ${completed ? "completed" : "cot completed"}`);
      setTodos((prevTodos) => 
         prevTodos.map(todo => (
            todo.id === id ? {...todo, completed} : todo
         ))
      );
   } 

   function addTodoItem(title: string){
      // console.log(title);
      // const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
      const newId = Date.now();

      const newTodo = {
         id: newId,
         title: title,
         completed: false
      }

      setTodos(prevTodos => [newTodo, ...prevTodos]);
   }

   function deleteTodo(id: number){
      setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
   }

   function deleteAllCompletedTodos(){
      setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
   }

   return {
      todos,
      setTodoCompleted,
      addTodoItem,
      deleteTodo,
      deleteAllCompletedTodos,
   }
}