import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './todoContainer.css'
import { deleteToDoList, completedList } from '../redux'
import del from '../images/del.png';
import tick from '../images/tick.png';


function DisplayTodoContainer() {
  const todoList = useSelector(state => state.todoList)
  const dispatch = useDispatch()

  var updatedValue = {};

   const deleteItemInList = (id) =>{        
        dispatch(deleteToDoList(id))
    }
  
  const completedItemInList = (id) =>{
        dispatch(completedList(id))
  }
  
  return (
    <div>
      <div  className="tableHeader">
          <div className="task">Task</div>
          <div className="completion">Completion-Date</div>
          <div className="priority">Priority</div>
          <div></div>
          <div></div>
      </div>
      <div>
          {todoList.map(value => (
              <div className="tableContent">
                <div><span id={value.id}>{value.listName}</span></div>
                <div>{value.date}</div>
                <div>{value.priority}</div>
                <div><img src={del} alt="Italian Trulli" height="20" width="20" onClick={() => deleteItemInList(value.id)} /></div>
                <div><img src={tick} alt="Italian Trulli" height="20" width="20"  onClick={() => completedItemInList(value.id)} /></div>
              </div>
          ))}               
      </div>                                     
            
            <br/>          
    </div>
  )
}

export default DisplayTodoContainer
