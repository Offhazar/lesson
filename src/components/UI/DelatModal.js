import React from 'react';
import './DelatModal.css';

const DelatModal = (props) => {
  return (
    <div
      className={props.active ? 'modal2 active' : 'modal2'}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? 'modal2__content active' : 'modal2__active'}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};

export default DelatModal;
