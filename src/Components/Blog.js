import React from 'react';

const Blog = ({ id, title, author, picture }) => {
  return (
    <div>
      <img src={picture} alt="Author" />
      <h2>{title}</h2>
      <p>Author: {author}</p>
    </div>
  );
};

export default Blog;
