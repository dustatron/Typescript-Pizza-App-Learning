import React from "react";
import PizzaCSS from "./Pizza.module.css";
import { useStateDispatch } from "./AppState";
import { cartContainer } from "./Cart.module.css";
import { Pizza } from "../types";

interface Props {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();

  const handleAddToCartClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: { id: pizza.id, name: pizza.name, price: pizza.price },
      },
    });
  };

  return (
    <div className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add Pizza
      </button>
    </div>
  );
};

export default PizzaItem;
