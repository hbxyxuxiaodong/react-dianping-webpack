import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/addtodo';
import VisibleTodoList from '../containers/visiabletodolist';
const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div> )//注意括号不能换行
export default App 