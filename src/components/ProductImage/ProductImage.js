import styles from './ProductImage.module.scss';

const getImageSrc = (name, currentColor) => {
    return `${process.env.PUBLIC_URL}/images/products/shirt-${name.toLowerCase()}--${currentColor.toLowerCase()}.jpg`;
  };

const ProductImage = ({ title, name, currentColor }) => {
    return (
        <div className={styles.imageContainer}>
        <img 
            className={styles.image}
            alt={`${title} in ${currentColor}`}
            src={getImageSrc(name, currentColor)}
          />
        </div>
    );
};

export default ProductImage;