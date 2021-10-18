import classes from './Card.component.css';

const Card = props => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
