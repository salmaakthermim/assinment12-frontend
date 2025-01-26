import  { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axios from 'axios';

const EditBlog = () => {
  const { id } = useParams();
  const editor = useRef(null);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    content: '',
    createdBy: ''
  });

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/content-management/blogs/${id}`);
        setFormData({
          title: data.title,
          thumbnail: data.thumbnail,
          content: data.content,
          createdBy: data.createdBy
        });
      } catch (error) {
        console.error('Failed to fetch blog:', error);
      }
    };
    fetchBlog();
  }, [id]);

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
      await axios.put(`http://localhost:5000/content-management/blogs/${id}`, formData);
      navigate('/dashboard/content-management');
    } catch (error) {
      console.error('Failed to update blog:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
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
            Update Blog
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

export default EditBlog;
