import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  FileText, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Package, label: 'Products', to: '/products' },
    { icon: Users, label: 'Customers', to: '/customers' },
    { icon: ShoppingCart, label: 'Sales', to: '/sales' },
    { icon: FileText, label: 'Reports', to: '/reports' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Inventory Pro</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;