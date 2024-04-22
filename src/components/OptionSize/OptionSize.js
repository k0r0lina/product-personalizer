import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
    const handleSizeChange = (size) => {
      setCurrentSize(size);
    };

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map((size, index) => (
                <li key={index}>
                    <button
                    type="button"
                    className={currentSize === size.name ? styles.active : ''}
                    onClick={() => handleSizeChange(size.name)}
                    >
                    {size.name}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default OptionSize;