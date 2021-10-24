import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import ToDoContainer from './components/ToDoContainer'
import ShowNotification from './components/ShowNotification'
import React from 'react'



function App() {

  return (
    <Provider store={store}>
      <div>
      <ShowNotification></ShowNotification>
      <ToDoContainer></ToDoContainer>       
      </div>
    </Provider>
    
  );
}

export default App;
