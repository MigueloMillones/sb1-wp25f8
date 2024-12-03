import React from 'react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <div className="flex space-x-3">
          <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last Quarter</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Reports Dashboard</h2>
          {/* Reports interface will be implemented later */}
          <p className="text-gray-500">Reports interface coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;