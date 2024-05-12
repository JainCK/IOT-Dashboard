import React, { useState } from 'react';

interface DropdownButtonProps {
  id: string;
  dropdownToggle: string;
  dropdownTrigger: string;
  buttonText: string;
  menuItems: string[];
}

const Btn: React.FC<DropdownButtonProps> = ({ id, dropdownToggle, dropdownTrigger, buttonText, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        id={id}
        data-dropdown-toggle={dropdownToggle}
        data-dropdown-trigger={dropdownTrigger}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {buttonText}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isDropdownOpen && (
        <div id={dropdownToggle} className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={id}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Btn;
