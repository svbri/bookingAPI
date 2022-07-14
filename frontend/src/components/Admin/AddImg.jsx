import React from 'react';
import styles from '../../styles/admin/admin.module.css';

const AddImg = ({ setImage, inputValue, setInputValue }) => {

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const nuevaImagen = {
    title: "new image",
    urlImage: inputValue,
    product: {
      id: 8
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if( inputValue.trim().length > 2) {
      setImage( imgs => [...imgs, nuevaImagen])
      setInputValue('');
    }
  }

  return (
    <div className={styles.imgContainer}>
        <input 
          type="text"
          placeholder='Insertar https://'
          value={ inputValue }
          onChange={ handleInputChange }
          className={styles.inputImg}
        />
        <div className={styles.plus} onClick={ handleClick } >
            +
        </div>
    </div>
  )
}

export default AddImg