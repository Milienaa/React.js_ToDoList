import './form.scss';
import { useContext } from 'react';
import myToDo from '../../Context';


export default function Form() {
    const { handlerAddTodo } = useContext(myToDo);

    

    return (
        <div className='form'>
            <input type="text" placeholder='What do you planning to do?' onKeyUp={(e) => handlerAddTodo(e)} />
        </div>
    )
}