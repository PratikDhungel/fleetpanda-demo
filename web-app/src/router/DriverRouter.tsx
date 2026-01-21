import { Routes, Route } from 'react-router-dom'
import DriverDashboard from '../pages/driver/DriverDashboard'

const AdminRouter = () => {
  return (
    <Routes>
      <Route index element={<DriverDashboard />} />
      <Route path='*' element={<div>Driver page not found</div>} />
    </Routes>
  )
}

export default AdminRouter
