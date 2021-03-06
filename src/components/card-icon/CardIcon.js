import React, { useContext } from 'react';
import shoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from './../../context/cart-context';
import './card-icon.scss';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
