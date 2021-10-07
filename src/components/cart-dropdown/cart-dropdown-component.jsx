import React from "react";
import CustomButton from "../custom-button/custom-buttom-component";
import CartItem from "../cart-item/cart-item-component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import { CartDropdownContainer, CartItems,EmptyMessage } from "./cart-dropdown-style";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {
        cartItems.length ?(
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
        ))
        ):(
        <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
    </CartItems>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);


const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));