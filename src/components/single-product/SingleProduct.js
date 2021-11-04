import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductContext } from './../../context/products-context';
import Layout from './../shared/Layout';
import './single-product.scss';

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));

    // if !product - redirect to shop page
    if (!product) {
      return push('/shop');
    }

    setProduct(product);
  }, [id, product, push, products]);

  if (!product) {
    return null;
  }

  const { imageUrl, title, price, description } = product;

  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img src={imageUrl} alt={title} />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>$ {price}</p>
          </div>
          <div className='add-to-card-buttons'>
            <button
              className='button is-white nomad-btn'
              id='btn-white-outline'>
              ADD TO CART
            </button>
            <button
              className='button is-black nomad-btn'
              id='btn-white-outline'>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className='product-description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);
