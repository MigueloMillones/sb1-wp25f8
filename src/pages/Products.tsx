import React from 'react';

const Products = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Product
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Product List</h2>
          {/* Product table will be implemented later */}
          <p className="text-gray-500">Product management interface coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Products;