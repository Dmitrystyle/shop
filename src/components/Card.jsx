import { MdShoppingCart } from "react-icons/md";

const Card = ({ img, title, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <section className="card-price">
            <div className="price">{newPrice}</div>
            <div className="bag">
              <MdShoppingCart className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
