import React from 'react';
import './DelatModal.css';
import ReactDom from 'react-dom';
import reactDom from 'react-dom';
import Button from './Button';
import classes from '../Users/UsersList.module.css'

const DelatModal = (props) => {
  const Backdrop2 = () => {
    return (
      <div
        className={props.active ? 'modal2 active' : 'modal2'}
        onClick={() => props.setActive(false)}
      >
        <div
          className={props.active ? 'modal2__content active' : 'modal2__active'}
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    );
  };

  function DeleteModal() {
    function onDelete() {
      props.onFilter();
    }
    return (
      <div className={classes.users}>
        <h1>Удалить?</h1>
        <Button onClick={onDelete}>Dа</Button>
        <Button onClick={() => props.onCancel()}>Net</Button>
      </div>
    );
  }

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop2 setActive={props.setActive} />,
        document.getElementById('backdrop-root2')
      )}
      {reactDom.createPortal(
        <DeleteModal />,
        document.getElementById('backdrop-root2')
      )}
    </>
  );
};

export default DelatModal;
