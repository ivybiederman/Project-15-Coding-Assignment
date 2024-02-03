import axios from 'axios';

const BASE_URL = 'https://65a0b515600f49256fb02c99.mockapi.io/blogs';

const BlogsApi = {
  getAll: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  },
  create: async newBlog => {
    try {
      const response = await axios.post(BASE_URL, newBlog);
      return response.data;
    } catch (error) {
      console.error('Error creating blog:', error);
      return null;
    }
  },
  // Implement other CRUD operations (update, delete) if needed
};

export default BlogsApi;
