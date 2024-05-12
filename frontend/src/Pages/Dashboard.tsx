import { Barchart } from "../Components/BarChart"
import DeviceDetails from "../Components/Details"
import LineChart from "../Components/LineChart"
import Btn from "../Components/Btn"

const Dashboard = () => {
  return (
    <div className="flex py-10 px-12">
      <div className="flex flex-col">
      <Btn 
        id="devicesBtn" 
        dropdownToggle="devicesDropdown" 
        dropdownTrigger="click" 
        buttonText="Devices" 
        menuItems={["D1", "D2", "D3", "D4", "D5", "D6", "D7"]} 
      />
      <div className="flex flex-row max-w-lg max-h-80 pt-10">
        <LineChart />
        <Barchart />
      </div>
      <div className="pt-24 max-w-screen">
      <DeviceDetails name="Device1" id="1n2k55" description="random 2 numbers"/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard