import { useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', active: true },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'user', active: false },
  ]);
  const [selectedUser, setSelectedUser] = useState<{ id: number, name: string, email: string, role: string, active: boolean } | null>(null);
  const [newRole, setNewRole] = useState<string | null>('user');
  const [activeStatus, setActiveStatus] = useState<string | null>('user');

  const handleRoleChange = (userId: number, newRole: string) => {
    setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
  };

  const handleActiveStatusChange = (userId: number, activeStatus: string) => {
    setUsers(users.map(user => user.id === userId ? { ...user, active: activeStatus === 'true' } : user));
  };

  const handleUserDelete = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="px-12 py-10">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-row-4 gap-4">
        {users.map(user => (
          <div key={user.id} className="max-w-5xl border rounded">
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">Role: {user.role}</p>
            <p className="text-sm text-gray-500">Active: {user.active ? 'Yes' : 'No'}</p>
            <div className="mt-2">
              <button onClick={() => setSelectedUser(user)} className="mr-2">Edit</button>
              <button onClick={() => handleUserDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-bold">{selectedUser?.name}</h3>
          <div className="mt-2">
            <label className="mr-2">Role:</label>
            <select value={newRole?? ''} onChange={(e) => setNewRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mt-2">
            <label className="mr-2">Active:</label>
            <select value={activeStatus?? ''} onChange={(e) => setActiveStatus(e.target.value)}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="mt-2">
            <button onClick={() => handleRoleChange(selectedUser?.id, newRole?? '')} className="mr-2">Save</button>
            <button onClick={() => handleActiveStatusChange(selectedUser?.id, activeStatus?? '')}>Cancel</button>
          </div>
          </div>
      )}
      </div>
  )}









  
// import { useState, useEffect } from "react";
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [newRole, setNewRole] = useState(null);
//   const [activeStatus, setActiveStatus] = useState(null);

//   useEffect(() => {
//     axios.get('/api/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handleRoleChange = (userId, newRole) => {
//     axios.put(`/api/users/${userId}/role`, { role: newRole })
//       .then(response => {
//         setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const handleActiveStatusChange = (userId, activeStatus) => {
//     axios.put(`/api/users/${userId}/active`, { active: activeStatus })
//       .then(response => {
//         setUsers(users.map(user => user.id === userId ? { ...user, active: activeStatus } : user));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const handleUserDelete = (userId) => {
//     axios.delete(`/api/users/${userId}`)
//       .then(response => {
//         setUsers(users.filter(user => user.id !== userId));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//       <div className="grid grid-cols-4 gap-4">
//         {users.map(user => (
//           <div key={user.id} className="p-4 border rounded">
//             <h3 className="text-lg font-bold">{user.name}</h3>
//             <p className="text-sm text-gray-500">{user.email}</p>
//             <p className="text-sm text-gray-500">Role: {user.role}</p>
//             <p className="text-sm text-gray-500">Active: {user.active ? 'Yes' : 'No'}</p>
//             <div className="mt-2">
//               <button onClick={() => setSelectedUser(user)} className="mr-2">Edit</button>
//               <button onClick={() => handleUserDelete(user.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedUser && (
//         <div className="mt-4 p-4 border rounded">
//           <h3 className="text-lg font-bold">{selectedUser.name}</h3>
//           <div className="mt-2">
//             <label className="mr-2">Role:</label>
//             <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>
//           <div className="mt-2">
//             <label className="mr-2">Active:</label>
//             <select value={activeStatus} onChange={(e) => setActiveStatus(e.target.value)}>
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//           <div className="mt-2">
//             <button onClick={() => handleRoleChange(selectedUser.id, newRole)} className="mr-2">Save</button>
//             <button onClick={() => handleActiveStatusChange(selectedUser.id, activeStatus)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
