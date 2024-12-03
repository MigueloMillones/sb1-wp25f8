export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
}

export interface Sale {
  id: string;
  customerId: string;
  items: SaleItem[];
  total: number;
  date: Date;
  status: 'pending' | 'completed' | 'cancelled';
  paymentMethod: 'cash' | 'card' | 'transfer';
}

export interface SaleItem {
  productId: string;
  quantity: number;
  price: number;
  subtotal: number;
}