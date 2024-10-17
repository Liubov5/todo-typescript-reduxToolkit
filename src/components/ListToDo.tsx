import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks';
import styles from '../styles/ListToDo.module.css'
import { changeStatus } from '../store/todosSlice';
import {  useSearchParams } from 'react-router-dom';
import { ITodo } from '../store/types';

type Props = {}


const ListToDo = (props: Props) => {
    const todos = useAppSelector((state)=>state.todos.list);
    const dispatch = useAppDispatch();
    let filteredTodos : ITodo[] = todos;

    const [searchParams] = useSearchParams()
    const status:string | null= searchParams.get("status");

    if(status === 'completed') {
        filteredTodos = todos.filter((todo)=>todo.completed === true)
    }else if(status === 'active') {
        filteredTodos = todos.filter((todo)=>todo.completed === false)
    } 

    const statusHandler = (id:string):void=>{
        dispatch(changeStatus(id));
    }
    return (
        <div>
            {
              filteredTodos.length > 0 ?  filteredTodos.map((todo)=> (
                    <div className={styles.todo} key={todo.id}>
                        <input onChange={()=>statusHandler(todo.id)} type='checkbox' checked={todo.completed}/>
                        <p className={`${styles.todo__text} ${todo.completed ? styles.todo_completed : ''} `}>{todo.title}</p>
                    </div> 
                    
                )) : <p>No Todos</p>
            }
        </div>
  )
}

export default ListToDo