import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";

function App() {
   const [todos, setTodos] = useState(dummyData);

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
      setTodos(prevTodos => [
         ...prevTodos,
         {
            id: prevTodos.length + 1,
            title: title,
            completed: false
         }
      ])
   }

  return (
    <main className='py-10 h-screen'>
      <h1 className='font-bold text-3xl text-center text-slate-700 pb-4'>Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 p-10 rounded-xl space-y-6">
         <AddTodoForm todoTitle={addTodoItem}/>
         <div className="space-y-2">
            {todos.map(todo=> (
               <TodoItem key={todo.id} todo={todo} onCompletedChange={setTodoCompleted}/>
            ))}
         </div>
      </div>
    </main>
  )

}

export default App
