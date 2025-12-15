import type { Todo } from "../types/todo"

interface TodoItemProps {
   todo: Todo;
   onCompletedChange: (id: number, completed: boolean) => void;
}

function TodoItem({todo, onCompletedChange}: TodoItemProps) {
   return (
      <div>
         <label className="
         flex items-center gap-2 
         border rounded-xl border-slate-700 
         py-1 px-3 
         bg-white hover:bg-slate-200 hover:scale-[1.032] transition-all ">
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125 hover:scale-[1.35] transition-all accent-slate-700"  
            />  
            <span className={todo.completed ? "line-through text-xl text-slate-400" : "text-xl text-slate-700"}>{todo.title}</span> 
         </label>
      </div>
   )
}

export default TodoItem
