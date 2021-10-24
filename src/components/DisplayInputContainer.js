import React,{useState,useEffect}  from 'react'
import DisplayTodoContainer from './DisplayTodoContainer';
import Header from './Header'
import {useDispatch} from 'react-redux'
import { addToDoList } from '../redux'


function DisplayInputContainer() {

  const dispatch = useDispatch()

  var todo = {}
  const [todoText, setTodoText] = useState('')
  const [todoDate, setTodoDate] = useState('')
  const [todoPriority, setTodoPriority] = useState('')

  useEffect(() => {
        setTodoPriority('1')                     
    }, [])

  

   const getToDoText = (e) =>{        
        setTodoText(e.target.value)    
  }
  
  const getDate = (e) =>{
        setTodoDate(e.target.value)
  }
  
  const getPriority= (e) => {
    setTodoPriority(e.target.value)
  }

  const addToList = () =>{
        var textValidation = true;
        var dateValidation = true;
        todo = {
            listName: todoText,
            date : todoDate,
            priority : todoPriority
        }
        
        // if(todo.listName===''){
        //     document.getElementById('textBoxSpanError').style.visibility = 'visible';
        //     textValidation = false;
        // }else{
        //     document.getElementById('textBoxSpanError').style.visibility = 'hidden';
        //     textValidation = true;
        // }
        // if(todo.date===''){
        //     document.getElementById('dateSpanError').style.visibility = 'visible';
        //     dateValidation = false;
        // }else{
        //     document.getElementById('dateSpanError').style.visibility = 'hidden';
        //     dateValidation = true;
        // }
        // if(textValidation && dateValidation){
        //     setCount(count+1)
        //  dispatch(addToDoList(todo))  
        // }
        dispatch(addToDoList(todo));
    }



  return (
    <div>
      <div className="todoList" >
          {/**Header of the app */}
          <Header></Header>
          
          <div className="inputDataFields">
            {/**Text Field to take the task to do */}
            <div className="textField">
              <span style={{ color: 'red' }}>*</span>
              <span id="taskText">Task</span>
              <input type="text" name="task" id="text" onChange={getToDoText} />
            </div>
            {/**Date field to be chosen on when the entered task is to be completed */}
            <div className="dateField">
              <span style={{ color: 'red' }}>*</span>
              <span id="dateText">Date</span>
              <input type="date" name="date" id="date" onChange={getDate} />
            </div>
            {/**Choose the priority of the task */}
            <div className="menuField">
              <span id="menuText">Priority:</span>
              <select name="priority" id="priority" onChange={getPriority}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
              </select>
            </div>
            {/**click the add button to add the task */}
            
              <button className="addbtn" onClick={addToList}>Add Task</button>
            
          </div>
            
          <DisplayTodoContainer></DisplayTodoContainer>
              
      </div>
    </div>
  )
}

export default DisplayInputContainer
