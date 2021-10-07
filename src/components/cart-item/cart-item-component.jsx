import React from "react";
import { CartItemContainer, ItemDetails,ItemName } from "./cart-item-style";


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemName>
          {quantity} x ${price}
        </ItemName>
      </ItemDetails>
    </CartItemContainer>
  );

export default CartItem;

