import { useState } from 'react/cjs/react.development';
import React from 'react';
import Form from './Form';

function Comment(props) {
  const [save, setSave] = useState([]);
  function DataHandler(data) {
    setSave(
      (prev = (props) => {
        props, data;
      })
    );
    console.log(save);
    console.log(data);
  }
  return (
    <div>
      <Form onAdd={DataHandler} />;
    </div>
  );
}

export default Comment;
