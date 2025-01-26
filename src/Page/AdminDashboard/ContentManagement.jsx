import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useHistory } from 'react-router-dom';

const ContentManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();

  console.log("statusFiltre", statusFilter);


  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/content-management/blogs?status=${statusFilter}`
      );
      setBlogs(data);
    } catch (err) {
      setError("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [statusFilter]);

  const handlePublish = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/content-management/blogs/${id}/publish`
      );
      fetchBlogs();
    } catch (err) {
      alert("Failed to publish blog", err);
    }
  };

  const handleUnpublish = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/content-management/blogs/${id}/unpublish`
      );
      fetchBlogs();
    } catch (err) {
      alert("Failed to unpublish blog", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/content-management/blogs/${id}`
      );
      fetchBlogs();
    } catch (err) {
      alert("Failed to delete blog", err);
    }
    toast("blogs delete sucesfull!")
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <button
          onClick={() => navigate('/dashboard/content-management/add-blog')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Blog
        </button>
      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Title</th>
              <th className="border p-2">Thumbnail</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Created By</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="border p-2">{blog.title}</td>
                <td className="border p-2">
                  <img src={blog.thumbnail} alt="Blog thumbnail" className="w-20 h-20 object-cover" />
                </td>
                <td className="border p-2">{blog.status}</td>
                <td className="border p-2">{blog.createdBy}</td>
                <td className="border p-2">
                  {blog.status === 'draft' ? (
                    <button
                      onClick={() => handlePublish(blog._id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
                    >
                      Publish
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnpublish(blog._id)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                    >
                      Unpublish
                    </button>
                  )}
                  <button
                    onClick={() => navigate(`/dashboard/content-management/edit-blog/${blog._id}`)}
                    className="px-3 py-1 bg-green-500 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContentManagement;
