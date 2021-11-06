import React, { useState } from 'react';
import Card from '../Ui/Card';
import ErrorModule from '../Ui/ErrorModule';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const [enteredDate, setDate] = useState('');
  const [error, setError] = useState();

  const userChange = (e) => {
    setInput(e.target.value);
  };
  const dataChange = (e) => {
    setDate(e.target.value);
  };

  const addUserHundler = (event) => {
    event.preventDefault();
    const data = {
      name: input,
      id: Math.random().toString(),
      date: enteredDate,
    };
    if (input.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-emty value)',
      });
      return;
    }

    props.onAdd(data, enteredDate);

    setInput('');
    setDate('');
  };
  const erroHundler = () => {
    setError(null);
  };

  return (
    <Card>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={erroHundler}
        />
      )}
      <form onSubmit={addUserHundler} className="todo-form">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={input}
          name="text"
          className="todo-input"
          onChange={userChange}
        />
        <input
          className="todo-date"
          type="date"
          onChange={dataChange}
          value={enteredDate}
        />
        <button className="todo-button" type="submit">
          Add Todo
        </button>
      </form>
    </Card>
  );
}

export default TodoForm;
