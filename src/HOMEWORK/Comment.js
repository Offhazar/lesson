import { useState } from 'react/cjs/react.development';
import React from 'react';
import Form from './Form';

function Comment(props) {
  const [save, setSave] = useState([]);
  function DataHandler(data) {
    setSave([...save, data]);
  }

  return (
    <div>
      <Form onAdd={DataHandler} />
      {save.map((el) => {
        return (
          <div>
            <p>{el.name}</p>
            <span>{el.comment}</span>
            <h4>{el.date}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
