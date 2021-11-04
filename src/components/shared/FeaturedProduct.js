import React from 'react';
import { withRouter } from 'react-router-dom';
import './featured-product.scss';

const FeaturedProduct = props => {
  const { title, imageUrl, price, history, id } = props;

  const goToProduct = () => history.push(`/product/${id}`);

  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={goToProduct}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className='button is-black noma-btn'>ADD TO CARD</button>
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
