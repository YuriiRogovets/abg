import css from "./CeilingItem.module.css"

const CeilingItem = ({ceiling}) => {
    const { images, description, brand, price } = ceiling;
    

  return (
      <div className={css.wrapper}>
          <img className={css.image}
              src={images}
              alt="product image"
              width={130}
          
          />
          <h2>бренд:{brand}</h2>
          <p>Опис: {description} </p>
          <h2>Ціна: {price} </h2>
    </div>
  )
}

export default CeilingItem