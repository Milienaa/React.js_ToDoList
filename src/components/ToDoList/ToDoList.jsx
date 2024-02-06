import './toDoList.scss'
import ToDoItem from '../ToDoItem/ToDoItem';
import { useContext } from 'react';
import myToDo from '../../Context';

export default function ToDoList() {
    const { todos } = useContext(myToDo);

    if (todos.length === 0) {
        return (<p className='todo__message'>Nothing is planed</p>)
    }

    return (
        <ul className='todo__items'>
            {todos.map((elem, index) => <ToDoItem key={index} {...elem}  todos={todos} />)}
        </ul>
    )
}