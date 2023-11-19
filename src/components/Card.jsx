import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img
          className="card-img"
          src="https://cdn1.ozone.ru/s3/multimedia-i/6560753334.jpg"
          alt="<Бетономешалка"
        />
        <div className="card-details" />
        <h3 className="card-title">Бетономешалка</h3>
        <section className="card-price">
          <div className="price"> 1400р/сутки.</div>
          <div>
            <MdShoppingCart />
          </div>
        </section>
      </section>
    </>
  );
};

export default Card;
