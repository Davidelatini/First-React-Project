// src/components/SingleBook.js
import React from 'react';
import styles from './SingleBook.module.css';
import CommentArea from './CommentArea';

function SingleBook({ book, isSelected, onClick }) {
  return (
    <div
      className={`${styles.book} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <img src={book.img} alt={book.title} />
      <p>{book.title}</p>
      {isSelected && <CommentArea bookId={book.id} />}
    </div>
  );
}

export default SingleBook;
