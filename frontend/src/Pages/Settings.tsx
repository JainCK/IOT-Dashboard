import { useState } from "react";

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
    <form className="mb-2 py-10 px-12">
      <h2 className="text-2xl font-bold mb-1">Edit your details</h2>
      <div className="mb-2">
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Your name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-48 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} required />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-48 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} required />
      </div>
      <div className="mb-2">
        <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Your phone number</label>
        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2.5 px-48" onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })} required />
      </div>
      <button type="submit" onClick={saveSettings} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm max-w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
    </form>
  );
};

export default Settings;
