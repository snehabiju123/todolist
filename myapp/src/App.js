import logo from './logo.svg';
import TodoList from './TodoList';

import { useState } from 'react';

const App=()=>{
  const [todos,settodos]=useState([]);

  const handleAddTodo=(newtodo)=>{
   
    settodos(...todos,newtodo);
  };

return(
  <div>
    <TodoList todos={todos} onAddTodo={handleAddTodo}/>
  </div>
);
};

   export default App;











 
