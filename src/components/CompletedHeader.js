import React from 'react'
import './todoContainer.css'

import { useSelector } from 'react-redux'

function CompletedHeader() {
  const completedToDoList = useSelector(state => state.completedToDoList)

    return (
        <div>
        <header>
            <h4 id="count">Total Completed:{completedToDoList.length}</h4>
            <h1 >Completed LIST </h1>
        </header>
        </div>
    )
}

export default CompletedHeader
