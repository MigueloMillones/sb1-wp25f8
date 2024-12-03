import React from 'react';

const Customers = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Customer
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Customer List</h2>
          {/* Customer table will be implemented later */}
          <p className="text-gray-500">Customer management interface coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;