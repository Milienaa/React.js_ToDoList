
import Header from "./components/Headers/Header";
import './app.scss';
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";
import { Context } from './Context';

export default function App() {

  return (
    <Context>
      <section className="todo">
        <Header text="New task" />
        <Form />
        <Header text="List of the tasks" />
        <ToDoList />
      </section>
    </Context>
  )
}