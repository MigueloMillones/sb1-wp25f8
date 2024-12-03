import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

const Header = () => {
  const { user } = useAuthStore();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome back, {user?.name}
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{user?.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;