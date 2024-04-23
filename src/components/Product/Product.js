import React, { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
    return basePrice + additionalPrice;
  }, [currentSize, sizes, basePrice]);

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalPrice: PropTypes.number.isRequired
      })
    ).isRequired
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm 
        title={title} 
        price={price} 
        currentSize={currentSize} 
        setCurrentSize={setCurrentSize} 
        currentColor={currentColor} 
        setCurrentColor={setCurrentColor} 
        colors={colors} sizes={sizes}/>
      </div>
    </article>
  )
};



export default Product;