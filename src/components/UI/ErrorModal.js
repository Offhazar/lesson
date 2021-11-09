import React from 'react';
import ReactDom from 'react-dom';
import ModalOverLay from './ModalOverLay';
import Backdrop from './Backdrop';


const ErrorModule = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root2')
      )}
      {ReactDom.createPortal(
        <ModalOverLay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ErrorModule;
