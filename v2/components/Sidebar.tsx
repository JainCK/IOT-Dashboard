import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 bg-white py-10 px-12 font-Raleway border-r-2 border-slate-400">
      <h1 className="text-xl font-bold mb-4">IoT Dashboard</h1>
      <ul className="py-10">
        <li className="mb-2">
          <Link href="/dashboard" className="text-lg text-blue-500 hover:bg-gray-600 inline-block px-5 py-2 rounded-lg bg-white border border-blue-500">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link href="/settings" className="text-lg text-blue-500 hover:bg-gray-600 inline-block px-5 py-2 rounded-lg bg-white border border-blue-500">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;