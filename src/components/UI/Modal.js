import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.conent}>{props.children}</div>
    </div>
  );
};

const Modal = () => {
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
    {ReactDOM.createPort(
      <ModalOverlay>{props.children}</ModalOverlay>,
      document.getElementById('overlays')
    )}
  </React.Fragment>;
};

export default Modal;
