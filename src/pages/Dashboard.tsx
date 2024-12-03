import React from 'react';
import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }: {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: string;
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div className="p-3 bg-blue-50 rounded-full">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
    </div>
    <p className="text-sm text-green-600 mt-4">{trend}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-3">
          <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={DollarSign}
          label="Total Revenue"
          value="$24,567"
          trend="+12.5% from last month"
        />
        <StatCard
          icon={TrendingUp}
          label="Total Sales"
          value="1,234"
          trend="+8.2% from last month"
        />
        <StatCard
          icon={Users}
          label="Total Customers"
          value="892"
          trend="+15.3% from last month"
        />
        <StatCard
          icon={Package}
          label="Products in Stock"
          value="456"
          trend="-2.4% from last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Sales</h3>
          {/* Add sales chart or table here */}
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          {/* Add products chart or table here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;