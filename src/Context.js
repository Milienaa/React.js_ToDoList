import { useState, createContext, useEffect } from "react";

const myToDo = createContext();

export function Context(props) {
    const [todos, setTodos] = useState([]);

    //Get and set data from LocalStorage
    useEffect(() => {
        let tmp = localStorage.getItem('todoStr') || '[]';
        
        setTodos(JSON.parse(tmp));
    },[]);

    useEffect(() => {
        todos.length !== 0 && localStorage.setItem('todoStr', JSON.stringify(todos));
    }, [todos]);

    //Add tasks to array
    const handlerAddTodo = (e) => {

        if (e.key === 'Enter' && e.target.value !== '' && !todos.some(elem => elem.title === e.target.value)) {
            setTodos([...todos, { title: e.target.value, status: false}]);
            e.target.value = '';
        }
    }

    //Status determination
    const handlerChecked = (title) => {
        let tmp = todos.map((elem) => {
            if (elem.title === title) {
                return { title: elem.title, status: !elem.status }
            } else {
                return { ...elem }
            }
        });
        setTodos(tmp);
    }

    //Delete task from array
    const handlerDelete = (title) => {
        setTodos(todos.filter(elem => elem.title !== title));
    }

    const value = { todos, setTodos, handlerAddTodo, handlerChecked, handlerDelete };

    return <myToDo.Provider value={value}>{ props.children}</myToDo.Provider>
}
    
export default myToDo;