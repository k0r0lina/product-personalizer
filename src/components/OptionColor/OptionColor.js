import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
    const prepareColorClassName = (color) => {
      return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

    const handleColorChange = (color) => {
      setCurrentColor(color);
    };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                    style={{ backgroundColor: prepareColorClassName(color) }}
                    onClick={() => handleColorChange(color)}
                  />
                </li>
              ))}
            </ul>
        </div>
    );
};



export default OptionColor;