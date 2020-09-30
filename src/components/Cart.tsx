import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartCSS from "./Cart.module.css";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevValue) => ({ isOpen: !prevValue.isOpen }));
  };

  componentDidMount() {
    document.addEventListener("mousedown", () => {
      this.setState({ isOpen: false });
    });
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);

          return (
            <div className={CartCSS.cartContainer}>
              <button className={CartCSS.button} type="button" onClick={this.handleClick}>
                <FiShoppingCart />
                <span>{state.cart.items.length === 1 ? `${state.cart.items.length} Pizza` : `${itemsCount} Pizzas`} </span>
              </button>
              <div className={CartCSS.cartDropDown} style={{ display: this.state.isOpen ? "block" : "none" }}>
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} | {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
