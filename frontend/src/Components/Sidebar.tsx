import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">IOT Dashboard</h1>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="text-blue-500 hover:underline">Devices</Link>
        </li>
        <li className="mb-2">
          <Link to="/analytics" className="text-blue-500 hover:underline">Analytics</Link>
        </li>
        <li>
          <Link to="/settings" className="text-blue-500 hover:underline">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

