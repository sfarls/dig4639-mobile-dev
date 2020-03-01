import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todoList.json';




function TodoItem(props){
  return <p className='card'>{props.content}</p>
}



class TodoList extends React.component{

  constructor(props){
    super(props)
    this.state = {
    todoList,
    hideCompletedItem:false
    
    }
    this.currentId = 4;
  }
  addTask(e){
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      { "id": this.currentId, "completed": true, "priority": 1, "content": "Task 1"})
      this.currentId++
      this.setState({todolist: todoList})
    
  }

  render(){
  return(
    <>
    <input type = "text" ref="taskContent" />
    <input type="button" value="add Task" onClick={(e) => this.addTask(e)} />
    <input ref="hideCompletedItemCheckbox" type="checkbox" id="hideCompletedItem" name="hideCompletedItem" value="hideCompletedItem"
onChange={(e) => this.setState({hideCompletedItem: e.target.checked})} />
      {(this.state.hideCompleteditem) ? todoList.filter((v) => !v.completed): todoList
      .map(
        (v) => <TodoItem key = {v.id} priority={v.priority} content={v.content} completed={v.completed} />
      )}
      </>)
  
      }  
    }
    

    function App(props) {
      return (
        <TodoList />
      )
    }
    

export default App;
