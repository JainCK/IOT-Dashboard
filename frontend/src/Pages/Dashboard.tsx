import DeviceDetails from "../Components/Details"
import Sidebar from "../Components/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
      <button>Devices</button>
      <div className="flex flex-row">
        <div className="w-2/5 h-56 bg-red-500"></div>
        <div className="w-2/5 h-56 bg-blue-500"></div>
      </div>
      
        <DeviceDetails name="Device1" id="1n2k55" description="random 2 numbers"/>
      </div>
    </div>
  )
}

export default Dashboard