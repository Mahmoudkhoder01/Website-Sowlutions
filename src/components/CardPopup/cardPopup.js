import classes from "./cardPopup.module.css";

const Card = (props) => {
  return (
    <>
      <div className={classes.backdrop}>
        <img
          className={classes.closeButton}
          src={process.env.PUBLIC_URL + "/Assets/rectangle-xmark-regular.svg"}
          alt="product_image"
          onClick={props.onClick}
        />
        <div className={classes.modal}>
          <div className={classes.productImage}>
            <img src={props.image} className={classes.modalImage} alt="" />
          </div>
          <div className={classes.details}>
            <h1>Name</h1>
            <p>{props.title}</p>
            <h1>Category</h1>
            <p>{props.category}</p>
            <h1>Quantity</h1>
            <p>{props.quantity}</p>
            <h1>Price</h1>
            <p>{props.price} $</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
