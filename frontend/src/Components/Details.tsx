import React from 'react';

interface DeviceDetailsProps {
  name: string;
  id: string;
  description: string;
}

const DeviceDetails: React.FC<DeviceDetailsProps> = ({ name, id, description }) => {
  return (
    <div>
        Device Details
      <div className="p-4 border border-gray-600 rounded bg-white text-base">
      <h2 className="text-lg font-bold mb-2">Device Name: {name}</h2>
      <p className="mb-2">Device ID: {id}</p>
      <p>Device Description: {description}</p>
    </div>
    </div>
    
  );
}

export default DeviceDetails;

