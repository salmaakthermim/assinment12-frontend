import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axios from 'axios';

const AddBlogs = () => {
  const editor = useRef(null);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    content: '',
    createdBy: ''
  });

  // Jodit Editor configuration
  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start writing your blog content...',
    height: 500,
    buttons: ['source', '|', 'bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'paragraph', '|', 'image', 'table', 'link', '|', 'left', 'center', 'right', 'justify', '|', 'undo', 'redo', '|', 'hr', 'eraser', 'fullsize']
  }), []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContentChange = (newContent) => {
    setFormData({
      ...formData,
      content: newContent
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://assignment-12-server-two-hazel.vercel.app/content-management/blog', formData);
      navigate('/dashboard/content-management');
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Thumbnail URL</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Content</label>
          <JoditEditor
            ref={editor}
            value={formData.content}
            config={config}
            onChange={handleContentChange}
          />
        </div>

        <div>
          <label className="block mb-2">Author</label>
          <input
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Blog
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/content-management')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
