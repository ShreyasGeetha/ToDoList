import React from 'react'
import {useSelector} from 'react-redux'
import CompletedHeader from './CompletedHeader'
import {addToDoList, deleteToDoList, completedList, sortOnClick} from '../redux'


function DisplayCompletedTodo() {
  const completedToDoList = useSelector(state => state.completedToDoList)

  return (
    <div className="completed">
       <CompletedHeader></CompletedHeader>
      <div  className="compTableHeader" id="completedTableHeader">
          <div className="compTask">Task</div>
          <div className="compCompletion">Completion-Date</div>
          <div className="compPriority">Priority</div>              
      </div>
      <div className="tableBlock">
          {completedToDoList.map(value => (
              <div className="tableContent">
                <div><span id={value.id}>{value.listName}</span></div>
                <div>{value.date}</div>
                <div>{value.priority}</div>                
              </div>
          ))}               
      </div>      
    </div>
  )
}

export default DisplayCompletedTodo
