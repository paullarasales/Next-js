import React from 'react';

interface Props {
  name: string;
  completed: boolean;
}

function Todo({ name, completed }: Props): JSX.Element {
  return (
    <li>
      <div>
        <input 
          type="checkbox" 
          checked={completed}
          readOnly
        />
        <label>{name}</label>
      </div>
    </li>
  );
}

export default Todo;
