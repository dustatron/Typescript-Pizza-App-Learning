import React from "react";
import { CartItem, useStateDispatch } from "./AppState";

// HOC

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export interface ClearTheCart {}

export function withAddToCard<OriginalProps extends AddToCartProps>(ChildComponent: React.ComponentType<OriginalProps>) {
  const AddTpCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();

    const handleAddToCartClick: AddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return <ChildComponent {...(props as OriginalProps)} addToCart={handleAddToCartClick} />;
  };

  return AddTpCartHOC;
}

export const WithAddToCardProps: React.FC<{ children: (props: AddToCartProps) => JSX.Element }> = ({ children }) => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };

  return children({ addToCart });
};

// Hook
export const useAddToCart = () => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };

  return addToCart;
};
