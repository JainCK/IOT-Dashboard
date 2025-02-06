import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
};

export default Dashboard;