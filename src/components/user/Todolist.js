import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Dates from '../data/Datas';
import Card from '../Ui/Card';

function TodoList(props) {
  const [save, setSave] = useState([]);

  const DataHundler = (data) => {
    setSave((prevInfo) => {
      let memory = [...prevInfo];
      memory = JSON.parse(localStorage.getItem('info')) || [];
      memory.unshift(data);
      localStorage.setItem('info', JSON.stringify(memory));
      return memory;
    });
  };
  console.log(save);

  let localData = JSON.parse(localStorage.getItem('info')) || [];

  const onDone = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      e.target.parentElement.classList.add('done');
    } else {
      e.target.parentElement.classList.remove('done');
    }
  };

  return (
    <div className="todo-container">
      <img
        src="https://pngimg.com/uploads/car_logo/car_logo_PNG1663.png"
        alt="альтернативный текст"
      />
      <TodoForm onAdd={DataHundler} />
      {localData.map((el, id) => {
        return (
          <Card>
            <ul className="todo-row" key={el.id} id={id.id}>
              <li>{el.name}</li>
              <Dates date={el.date} />
            </ul>
            <input className="input2" onClick={onDone} type="checkbox" />
          </Card>
        );
      })}
    </div>
  );
}

export default TodoList;
