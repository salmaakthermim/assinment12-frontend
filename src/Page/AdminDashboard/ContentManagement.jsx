import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ContentManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const history = useHistory();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:5000/content-management/blogs?status=${statusFilter}`);
      setBlogs(data);
    } catch (err) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [statusFilter]);

  const handlePublish = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/content-management/blogs/${id}/publish`);
      fetchBlogs();
    } catch (err) {
      alert('Failed to publish blog');
    }
  };

  const handleUnpublish = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/content-management/blogs/${id}/unpublish`);
      fetchBlogs();
    } catch (err) {
      alert('Failed to unpublish blog');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/content-management/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      alert('Failed to delete blog');
    }
  };

  return (
    <div>
      <h1>Content Management</h1>
      <button onClick={() => history.push('/dashboard/content-management/add-blog')}>Add Blog</button>
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {blogs.map((blog) => (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
              <img src={blog.thumbnail} alt="Blog thumbnail" width="100" />
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              <p>Status: {blog.status}</p>
              {blog.status === 'draft' && (
                <button onClick={() => handlePublish(blog._id)}>Publish</button>
              )}
              {blog.status === 'published' && (
                <button onClick={() => handleUnpublish(blog._id)}>Unpublish</button>
              )}
              <button onClick={() => handleDelete(blog._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentManagement;
