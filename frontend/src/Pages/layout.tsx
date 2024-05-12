
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'; // Import the Sidebar component

const Layout = () => {
  return (
    <div className="app-container flex flex-row">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
