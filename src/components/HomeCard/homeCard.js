import classes from "./homeCard.module.css";

const Card = (props) => {
  return (
    <div className={classes.wholeCard}>
      <h6 className={classes.productTitle}>{props.title}</h6>
      <div className={classes.card}>
        <img
          className={classes.ratio}
          src={props.src}
          alt="product_image"
          onClick={props.onClick}
        />
      </div>
      <p className={classes.price}>{props.price} $</p>
    </div>
  );
};

export default Card;
