import React from "react";
import { Pizza } from "../types";
import SpecialCSS from "./SpecialOffer.module.css";
import { WithAddToCardProps } from "./AddToCard";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={SpecialCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCardProps>
        {({ addToCart }) => {
          return (
            <button type="button" onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })}>
              Add Pizza
            </button>
          );
        }}
      </WithAddToCardProps>
    </div>
  );
};

export default SpecialOffer;
