// src/components/SingleComment.js
import React from 'react';

function SingleComment({ comment }) {
  return (
    <div>
      <p><strong>{comment.name}</strong>: {comment.body}</p>
    </div>
  );
}

export default SingleComment;
