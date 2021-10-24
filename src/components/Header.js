import React from 'react'
import './sample.css'
import ToDoContainer from './ToDoContainer'
import Sample from './Sample'
import {useSelector} from 'react-redux'


function Header(arr) {
    const todoList = useSelector(state => state.todoList)

    return (
        <div>
        <header>
            <h4 id="count">Total Todo:{todoList.length}</h4>
            <h1 >TODO LIST </h1>
        </header>
        </div>
    )
}

export default Header