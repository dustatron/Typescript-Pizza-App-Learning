import React from "react";
import { useStateDispatch } from "./AppState";
import { Pizza } from "../types";
import SpecialCSS from "./SpecialOffer.module.css";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();

  const handleAddToCartClick = () => {};
  return (
    <div className={SpecialCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add Pizza
      </button>
    </div>
  );
};

export default SpecialOffer;
