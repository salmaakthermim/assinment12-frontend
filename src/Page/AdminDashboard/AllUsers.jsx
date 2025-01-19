import axios from "axios";
import { useEffect, useState } from "react";


const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log("users",users);

  useEffect(() => {
    fetchUsers();
  }, [filter, page]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users", {
        params: { status: filter, page, limit: 10 },
      });
      setUsers(data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateUserStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/users/${id}/status`, { status });
      fetchUsers();
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  const updateUserRole = async (id, role) => {
    try {
      await axios.patch(`http://localhost:5000/users/${id}/role`, { role });
      fetchUsers();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="border-t">
              <td>
                <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              </td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <div className="relative">
                  <button className="px-2 py-1 bg-gray-300 rounded">•••</button>
                  <div className="absolute right-0 bg-white shadow p-2 rounded hidden">
                    {user.status === "active" ? (
                      <button
                        className="block px-4 py-2 text-sm text-red-600"
                        onClick={() => updateUserStatus(user._id, "blocked")}
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        className="block px-4 py-2 text-sm text-green-600"
                        onClick={() => updateUserStatus(user._id, "active")}
                      >
                        Unblock
                      </button>
                    )}
                    <button
                      className="block px-4 py-2 text-sm text-blue-600"
                      onClick={() => updateUserRole(user._id, "volunteer")}
                    >
                      Make Volunteer
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-yellow-600"
                      onClick={() => updateUserRole(user._id, "admin")}
                    >
                      Make Admin
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllUsers;
