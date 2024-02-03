import React, { useState } from 'react';

const NewBlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [picture, setPicture] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !author || !picture) return;
    onAddBlog({ title, author, picture });
    setTitle('');
    setAuthor('');
    setPicture('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Picture URL"
        value={picture}
        onChange={e => setPicture(e.target.value)}
      />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default NewBlogForm;
