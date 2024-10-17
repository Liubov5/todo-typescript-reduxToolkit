import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/todosSlice';
import styles from "../styles/AddToDo.module.css"

type Props = {}

const AddToDo = (props: Props) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>('');
   
    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            dispatch(addTodo(value));
            setValue('');
        }
    }
  
  return (
    <>
        <input className={styles.addTodo__input} value={value} onChange={(e)=>setValue(e.currentTarget.value)} onKeyDown={(e)=>keyDownHandler(e)} placeholder='What need to be done?'/>
    </>
  )
}

export default AddToDo