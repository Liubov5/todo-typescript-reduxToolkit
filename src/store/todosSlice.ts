import { ITodo } from './types';
import type { RootState } from './store';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

interface TodoState {
    list: ITodo[];
    leftTodo: number;
}
  
const initialState :TodoState =  {
    list: [],
    leftTodo: 0,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState ,
    reducers: {
        addTodo:(state, {payload}: PayloadAction<string>)=>{
            const todo: ITodo = {
                id: nanoid(),
                title:payload,
                completed: false,
            }
            state.list.push(todo);
            state.leftTodo++;
        },
        changeStatus: (state, {payload}: PayloadAction<string>)=>{
            let todo =  state.list.find((todo)=>todo.id === payload);
            if(todo){
                todo.completed = !todo.completed;
                todo.completed ? state.leftTodo-- : state.leftTodo++;
            }
        },
        clearCompleted : (state) =>{
           state.list = state.list.filter((todo)=> todo.completed === false);
        }
    }
})

export const { addTodo, changeStatus, clearCompleted} = todosSlice.actions;

export default todosSlice.reducer