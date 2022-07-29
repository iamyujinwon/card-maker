import React, { useRef } from 'react';
import styles from './imageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: 'fileName',
      url: 'url',
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'Upload Image'}
      </button>
    </div>
  );
};

export default ImageFileInput;
