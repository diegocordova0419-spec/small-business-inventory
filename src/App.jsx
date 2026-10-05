import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Customers from './pages/Customers.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Inventory from './pages/Inventory.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import Products from './pages/Products.jsx'
import Reports from './pages/Reports.jsx'
import Suppliers from './pages/Suppliers.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
