const Backdrop = props => {
  return <div className={classes.backdrop} />;
};

const Modal = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.conent}>{props.children}</div>
    </div>
  );
};

export default Modal;
