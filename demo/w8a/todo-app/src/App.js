import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>Hello</div>
  );
}



const todoList = [
{
    content: 'Task 1', priority: 2, completed: true
},
{
    content: 'Task 2', priority: 1, completed: true
},
{
    content: 'Task 3', priority: 3, completed: true
}

]

function TodoItem(props){
  return <p>{props.content}</p>
}

function App(){
  const todoListFiltered = todoListFiltered.map(
    (value) => <TodoItem content={value.content} />
  )
  //Filter?
  todoArray = todoArray.filter((value) => value.completed)
  /*
  const todoArray = [
    <TodoItem content ="Item 1"/>
    <TodoItem content ="Item 2" />
    <TodoItem content = "Item 3" />
  ] */
  return(
    <div>
      {todoList.filter(
        (v) => v.completed).map(
          (v) => <TodoItem priority = {v.priority />)}
        );
      }
    </div>

export default App;
