import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Link, useSearchParams } from 'react-router-dom';
import styles from "../styles/Navigation.module.css"
import { clearCompleted } from '../store/todosSlice';
type Props = {}

const Navigation = (props: Props) => {
 const state  = useAppSelector((state)=>state.todos);
 const dispatch = useAppDispatch();

 const [searchParams] = useSearchParams()
 const status:string | null= searchParams.get("status");


  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__todoNumber}>
        <p>{state.leftTodo} Items left</p>
      </div>
      <div className={styles.navigation__links }>
        <Link className={`${styles.navigation__link} ${status === null ? styles.active : ''}`} to="/">All</Link>
        <Link className={`${styles.navigation__link} ${status === 'completed' ? styles.active : ''}`} to="/?status=completed">Completed</Link>
        <Link className={`${styles.navigation__link} ${status === 'active' ? styles.active : ''}`} to="/?status=active">Active</Link>
      </div>
      <div>
        <button className={styles.navigation__clearBtn} onClick={()=>dispatch(clearCompleted())}>Clear completed</button>
      </div>
    </div>
  )
}

export default Navigation