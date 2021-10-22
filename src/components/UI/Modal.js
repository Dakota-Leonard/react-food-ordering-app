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

const Modal = props => {
  const portalElement = document.getElementById('overlays');
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;