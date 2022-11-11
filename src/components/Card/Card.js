import Button from "../Button/Button";
import styles from "./Card.module.css"
console.log(styles);
export default function Card(props){
  console.log(props)
  return (
      <div className={styles.card}>
        <img className={styles["card-image"]} src="./image-product-desktop.jpg"></img>
        <div className={styles["card-description"]}>
            <h3 className={styles["card-category"]}>{props.categoria}</h3>
            <h1 className={styles["card-title"]}>{props.titulo}</h1>
            <p className={styles["card-text"]}>{props.text}</p>
          <div className={styles["card-price"]}>
            <h1  className={styles["card-price-discount"]}>{props.preco}</h1>
            <p  className={styles["card-price-full"]}>{props.desconto}</p>
          </div>
          <Button>
            <img src="./icon-cart.svg"/>Add to Cart
          </Button>
        </div>
      </div>
  )
}