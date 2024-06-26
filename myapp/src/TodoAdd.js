import  {useState} from 'react';
const TodoAdd=({onAddTodo}) =>
 { const[newtodo,setnewtodo]= useState('');
    const handleSubmit=(e) =>
    {
       e.preventDefault();
       if(newtodo.trim()!='')
        { 
            onAddTodo(newtodo);
            setnewtodo('');
        }
         
    };

  return(
    <form onSubmit={handleSubmit}>
    <input type="text" value={newtodo} onChange={(e) => setnewtodo(e.target.value)}/>
    <button type="submit">Add</button>
    </form>
  );

};
export default TodoAdd;
    
   
    


















