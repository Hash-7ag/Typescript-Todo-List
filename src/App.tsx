import { useEffect, useState } from "react"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
// import { ArrowBigUp, ArrowBigDown } from 'lucide-react';
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import type { Todo } from "./types/todo";

function App() {
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

  return (
    <main className='py-10 h-screen overflow-y-auto'>
      <h1 className='font-bold text-3xl text-center text-slate-700 pb-1'>Your Todos</h1>
      <TodoSummary 
         todos={todos}
         deleteAllCompleted={deleteAllCompletedTodos}
         deleteAll = {() => {setTodos([])}}
      />
      <div className="max-w-xl mx-auto bg-slate-200 p-10 rounded-xl space-y-6">
         <div>
            <AddTodoForm todoTitle={addTodoItem}/>
            <TodoList 
               todos={todos}
               onCompletedChange={setTodoCompleted}
               onDelete={deleteTodo}
            />
         </div>
      </div>
    </main>
  )

}

export default App
