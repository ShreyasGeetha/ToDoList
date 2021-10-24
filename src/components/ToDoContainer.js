import React from 'react'
import './todoContainer.css'
import DisplayInputContainer from './DisplayInputContainer';
import DisplayCompletedTodo from './DisplayCompletedTodo';
import ShowNotification from './ShowNotification';


function ToDoContainer(props) {
    

    return (
        <div className="main-content">
            <DisplayInputContainer></DisplayInputContainer>
            <DisplayCompletedTodo></DisplayCompletedTodo>
        </div>
    )
}
export default ToDoContainer;
// const mapStateToProps = state =>{
//     return{
//         todoList: state.todoList
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{        
//         addToDoList: (todoListValue)=>dispatch(addToDoList(todoListValue))
//     }
// }

// export default connect(
//                 mapStateToProps,
//                 mapDispatchToProps
//             )(ToDoContainer)
