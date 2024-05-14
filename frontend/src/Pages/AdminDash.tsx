import { useState, useEffect } from "react";
import axios from 'axios';
import { BACKEND_URL } from "../../config";

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState<string>("");
  const [activeStatus, setActiveStatus] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    active: boolean;
  }

  const handleRoleChange = (userId: number, newRole: string) => {
    axios.put(`${BACKEND_URL}/api/v1/user`, { role: newRole })
      .then(() => {
        setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleActiveStatusChange = (userId: number, activeStatus: boolean) => {
    axios.put(`${BACKEND_URL}/api/users`, { active: activeStatus })
      .then(() => {
        setUsers(users.map(user => user.id === userId ? { ...user, active: activeStatus } : user));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUserDelete = (userId: number) => {
    axios.delete(`${BACKEND_URL}/api/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="px-12 py-10">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="flex flex-col items-center">
        {users.map(user => (
          <div key={user.id} className="w-full p-4 border bg-slate-400 rounded mb-4">
            <h3 className="text-lg font-bold">Name: {user.name}</h3>
            <div className="flex flex-row justify-start mt-2">
            <p className="text-md text-gray-500  ml-5">Email: {user.email}</p>
            <p className="text-md text-gray-500  ml-5">Role: {user.role}</p>
            <p className="text-md text-gray-500  ml-5">Active: {user.active ? 'true' : 'false'}</p>
            <div className="mt-10 flex justify-between">
              <button onClick={() => setSelectedUser(user)} className="px-5 py-2 bg-slate-500 rounded-md">Edit</button>
              <button onClick={() => handleUserDelete(user.id)} className="px-5 py-2 bg-slate-500 rounded-md ml-5">Delete</button>
            </div>
            </div>
          
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-bold">{selectedUser.name}</h3>
          <div className="mt-2">
            <label className="mr-2">Role:</label>
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mt-2">
            <label className="mr-2">Active:</label>
            <select value={activeStatus} onChange={(e) => setActiveStatus(e.target.value)}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="mt-2">
            <button onClick={() => handleRoleChange(selectedUser.id, newRole)} className="mr-2">Save</button>
            <button onClick={() => handleActiveStatusChange(selectedUser.id, activeStatus === "true")}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
