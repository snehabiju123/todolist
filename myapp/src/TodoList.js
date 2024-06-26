
import TodoAdd from './TodoAdd'

const TodoList=({todos,onAddTodo})=>
  {const handleToggle=(index)=>
    {
       const newtodos=todos.slice();
       newtodos[index].completed=!newtodos[index].completed;
       onAddTodo(newtodos);
    };
    const handleDelete=(index)=>

      {const newtodos=todos.slice();
       newtodos.splice(index,1);
       onAddTodo(newtodos);

      };
    return(
  <div>
    <h1>Todo List</h1>
    <ul>
       {todos.map((todo,index)=>(
         <li key={index}>
         <input type="checkbox" checked={todo.completed} onChange={()=>handleToggle(index)}/>
         <span style={{ textDecoration: todo.completed? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button  id="delete" onClick={() => handleDelete(index)}>Delete</button>*/
         </li>
         ))}
         </ul>
            <TodoAdd onAddTodo={onAddTodo}/>

  </div>
 );
};
export default TodoList;

  

   

    

    

   

  










 
