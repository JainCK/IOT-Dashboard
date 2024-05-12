import { useState } from "react";
import LabelInput from "../Components/Labelinput";
import Sidebar from "../Components/Sidebar";


const Settings = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function saveSettings() {
    alert("Settings saved");
  }

  return (
    <div className="flex flex-row">
        <Sidebar />
        <div className="pl-48">
        <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <div className="px-10">
          <div className="text-3xl font-extrabold">Edit your details</div>
        </div>
        <div className="pt-2">
          <LabelInput
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />
          <LabelInput
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <LabelInput
            type="tel"
            placeholder="Phone Number"
            onChange={(e) =>
              setUserDetails({ ...userDetails, phone: e.target.value })
            }
          />
          <button
            onClick={saveSettings}
            type="button"
            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>

        </div>
    </div>
  );
};

export default Settings;
