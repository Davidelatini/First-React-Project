// src/components/BookList.js
import React, { useState } from 'react';
import SingleBook from './SingleBook';

const books = [
  { id: 1, img: 'url1', title: 'Book 1' },
  { id: 2, img: 'url2', title: 'Book 2' },
  { id: 3, img: 'url3', title: 'Book 3' }
];

function BookList() {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleBookClick = (id) => {
    setSelectedBookId(id === selectedBookId ? null : id);
  };

  return (
    <div>
      {books.map((book) => (
        <SingleBook
          key={book.id}
          book={book}
          isSelected={book.id === selectedBookId}
          onClick={() => handleBookClick(book.id)}
        />
      ))}
    </div>
  );
}

export default BookList;
