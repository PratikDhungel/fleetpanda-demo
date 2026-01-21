import { Routes, Route } from 'react-router-dom'
import AdminDashboard from '../pages/admin/AdminDashboard'

const AdminRouter = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path='*' element={<div>Admin page not found</div>} />
    </Routes>
  )
}

export default AdminRouter
