import React, { useState, useEffect } from 'react';
import BlogList from './Components/BlogList';
import NewBlogForm from './Components/NewBlogForm';
import BlogsApi from './rest/BlogsApi';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await BlogsApi.getAll();
      setBlogs(data);
    };
    fetchData();
  }, []);

  const handleAddBlog = async newBlog => {
    const createdBlog = await BlogsApi.create(newBlog);
    if (createdBlog) {
      setBlogs([...blogs, createdBlog]);
    }
  };

  return (
    <div>
      <h1>Blogs</h1>
      <BlogList blogs={blogs} />
      <h2>Add New Blog</h2>
      <NewBlogForm onAddBlog={handleAddBlog} />
    </div>
  );
};

export default App;
