import * as React from 'react';
import { Todo } from "../model";
import "./styles.css"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {}
    </div>
  )
}

export default TodoList;