import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = ({ title, getPrice, currentSize, setCurrentSize, currentColor, setCurrentColor, colors, sizes }) => {
    

  return (
        <form>
          <OptionSize currentSize={currentSize} setCurrentSize={setCurrentSize} sizes={sizes} />
          <OptionColor currentColor={currentColor} setCurrentColor={setCurrentColor} colors={colors} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" onClick={(event) => {
              event.preventDefault();
              console.log("===Product Summary===");
              console.log("Name:", title);
              console.log("Price:", getPrice());
              console.log("Size:", currentSize);
              console.log("Color:", currentColor);
            }}/>
          </Button>
        </form>
    );
};

export default ProductForm;