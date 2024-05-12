import { Link } from "react-router-dom";
const links = [
    { to: "/dashboard", text: "Devices" },
    { to: "/settings", text: "Settings" }
  ];

const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 bg-white py-10 px-12 font-Raleway border-r-2 border-slate-200">
      <h1 className="text-xl font-bold mb-4 ">
        <i className="fas fa-chart-line"></i>IOT Dashboard</h1>
      <ul className="py-10">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <Link to={link.to} className="text-lg text-blue-500 hover:bg-gray-600 inline-block px-5 py-2 rounded-lg bg-white border border-blue-500">{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

