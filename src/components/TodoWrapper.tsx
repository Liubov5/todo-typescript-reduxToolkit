import React from 'react'
import AddToDo from './AddToDo'
import ListToDo from './ListToDo'
import Navigation from './Navigation'

type Props = {}

const TodoWrapper = (props: Props) => {
  return (
    <div className='container'>
        <h1>Todos</h1>
        <AddToDo />
        <ListToDo />
        <Navigation />
    </div>
  )
}

export default TodoWrapper