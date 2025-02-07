import React, { useState } from 'react';
import Todo from './components/Todo';
import './index.css';

function App(props: any) {
    const [todos, setTodos] = useState([
        { name: 'Code', completed: true},
        { name: 'Eat', completed: false}
    ]);

    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul>
            {todos.map((todo, index) => (
                <Todo 
                    key={index}
                    name={todo.name}
                    completed={todo.completed}
                />
            ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  