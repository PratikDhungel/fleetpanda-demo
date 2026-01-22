import { Routes, Route } from 'react-router-dom'

import AdminLayout from '@/components/AdminLayout'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import AdminHubs from '@/pages/admin/AdminHubs'

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path='/hubs' element={<AdminHubs />} />
        <Route path='*' element={<div>Admin page not found</div>} />
      </Route>
    </Routes>
  )
}

export default AdminRouter
