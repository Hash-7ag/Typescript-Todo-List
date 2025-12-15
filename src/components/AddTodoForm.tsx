import { useState, type FormEvent } from "react"

interface TodoItemAdd{
   todoTitle: (title: string) => void
}

function AddTodoForm({todoTitle}: TodoItemAdd) {

   const [todoInfo, setTodoInfo] = useState("");

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if (todoInfo.trim()) { 
         todoTitle(todoInfo)
         setTodoInfo("")
      }
   }

   return (
      <form className="flex" onSubmit={handleSubmit}> 
         <input
         className=" 
         border-2 outline-none rounded-s-2xl border-slate-500  
         py-2 px-5 grow
         text-xl text-slate-600 
         bg-white hover:bg-slate-100 transition-all duration-150"
         placeholder="What needs to be done?" 
         type="text" 
         value={todoInfo}
         onChange={(e) => setTodoInfo(e.target.value)}
         />
         <button 
         type="submit"
         className="
         w-16 rounded-e-2xl bg-slate-500 hover:bg-slate-400 text-slate-100 hover:text-slate-50 transition-all duration-200
         "
         >
            Add
         </button>
      </form>
   )
}  

export default AddTodoForm
