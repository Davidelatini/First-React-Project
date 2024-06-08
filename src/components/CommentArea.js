// src/components/CommentArea.js
import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

function CommentArea({ bookId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${bookId}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [bookId]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <CommentList comments={comments} />
      <AddComment bookId={bookId} addComment={addComment} />
    </div>
  );
}

export default CommentArea;
