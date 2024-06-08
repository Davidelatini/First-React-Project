// src/components/AddComment.js
import React, { useState } from 'react';

function AddComment({ bookId, addComment }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { postId: bookId, name: "User", body: text, rating: rating };
    
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        addComment(data);
        setText('');
        setRating(1);
      })
      .catch((error) => console.error('Error adding comment:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review"
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddComment;
