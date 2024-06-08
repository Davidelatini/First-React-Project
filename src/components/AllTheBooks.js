// src/components/AllTheBooks.js
import React, { useState } from 'react';
import booksData from '../Data/horror.json';
import SingleBook from './SingleBook';
import styles from './AllTheBooks.module.css';

function AllTheBooks() {
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.bookGrid}>
        {filteredBooks.map((book, index) => (
          <div key={index} className={styles.book}>
            <SingleBook
              book={book}
              isSelected={index === selectedBookIndex}
              onClick={() => setSelectedBookIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTheBooks;
