import {ADD_TODOLIST,SORT_TODOLIST,EDIT_TODOLIST,DELETE_TODOLIST,COMPLETED_TODOLIST} from './todoListTypes'

const initialState = {
    todoList: [
        
        
    ],
    completedToDoList: [

    ],
    notification: [

    ],
    showNotification: false
}

const sendNotification = (list,msg) =>{
    var message = list.listName
    console.log('')
    var title = msg+':\nPriority'+list.priority+' task for '+list.date
}

const sortByTask = (a, b) =>{
    if(a.listName > b.listName){
        return 1;
    } else if(b.listName > a.listName){
        return -1;
    }else {
        return 0;
    }
}

const todoListReducer = (state = initialState, action) =>{
    switch(action.type){
          
        case ADD_TODOLIST: 
            action.payload["id"] = state.todoList.length + 1;
            var temp = action.payload;
            var obj = {
                ...state,
                todoList: [...state.todoList, action.payload],
                notification: [{ value: 'add', priority: temp.priority, msg: temp.listName, date: temp.date }],
                showNotification: true
            }
            return obj            

        case EDIT_TODOLIST:  
            return{
                ...state,
                todoList: state.todoList
            }

        case DELETE_TODOLIST:
        
            var temp = state.todoList.filter(arr => arr.id === action.payload);
            temp = temp.map(v => ({...v, value: 'deleted'}))
            var obj = {
            ...state,
            todoList: state.todoList.filter(arr => arr.id !== action.payload),
            notification: temp,
            showNotification: true
            }            
            return obj

        case COMPLETED_TODOLIST:
            var temp = action.payload; 
            var filteredCompletedList = state.todoList.filter(arr => arr.id === action.payload)
            temp = filteredCompletedList.map(v => ({...v, value: 'completed'}))
            var obj = {
                ...state,   
                completedToDoList: [...state.completedToDoList, filteredCompletedList[0]],
                todoList: state.todoList.filter(arr => arr.id !== action.payload),
                notification: temp,
                showNotification: true
            }
            return obj

        case SORT_TODOLIST:  
            var obj ={}
            if(action.payload==='task'){
                var temp = state.todoList.sort(sortByTask)
                
                obj = {
                    ...state,
                    todoList:[temp]
                }
            }
            else if(action.payload==='date'){

            }
            else if(action.payload==='priority'){

            }      
            return obj
        default: return state
    }
}

export default todoListReducer;
