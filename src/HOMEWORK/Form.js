import { useState } from 'react/cjs/react.development';
import React from 'react';

function Form(props) {
  const [name, setName] = useState(''); // name
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('1998');

  function NameValue(e) {
    setName(e.target.value);
  }

  function addComment(e) {
    setComment(e.target.value);
  }

  function addDateHandler(e) {
    setDate(e.target.value);
  }

  function clickBut(e) {
    e.preventDefault();
    let data = {
      name,
      comment,
      date,
    };

    setName('');
    setComment('');
    setDate('');

    props.onAdd(data);
  }
  return (
    <form onSubmit={clickBut}>
      <p>Name</p>
      <input type="text" onChange={NameValue} value={name} />
      <p>Comment</p>
      <input type="text" onChange={addComment} value={comment} />
      <p>Date</p>
      <input type="datetime-local" onChange={addDateHandler} value={date} />
      <button type={date}>Click</button>
    </form>
  );
}

export default Form;
