import React, { useEffect } from "react";
import pizzas from "../data/pizzas.json";
import PizzaItem from "./Pizza";
import ClearCartButton from "./ClearCartButton";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.SpecialOffer);

  // this is an example of achiving componentDidMount and componentWillUnmount
  // useEffect(() => {
  //   const listener = () => {
  //     alert("Hello");
  //   };
  //   document.addEventListener("mousedown", listener);
  //   return () => {
  //     document.removeEventListener("mousedown", listener);
  //   };
  // }, []);

  console.log("special", specialOfferPizza);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicius Pizza</div>
          <Cart />
        </div>

        <ClearCartButton />
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}

        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
