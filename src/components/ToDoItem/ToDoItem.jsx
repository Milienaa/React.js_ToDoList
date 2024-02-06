import './toDoItem.scss';
import { MdOutlineRadioButtonUnchecked as Unchecked, MdOutlineCheckCircleOutline as Checked, MdDeleteOutline as Delete } from "react-icons/md";
import { useContext } from 'react';
import myToDo from '../../Context';

export default function ToDoItem({ title, status }) {

    const { handlerChecked, handlerDelete } = useContext(myToDo);
    const isCheck = (status) => {
        return status ?
                        <Checked className='todo__icon todo__icon--check' onClick={() => handlerChecked(title)} />
                    :
                        <Unchecked className='todo__icon todo__icon--check' onClick={()=>handlerChecked(title)} />
        
    }

    return (
        <li className='todo__item'>
            {isCheck(status)}
            <span onClick={() => handlerChecked(title)}>{title}</span>
            <Delete className='todo__icon todo__icon--delete' onClick={() => handlerDelete(title)} />
        </li>
    )
}