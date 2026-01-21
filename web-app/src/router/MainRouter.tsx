import { Routes, Route, Navigate } from 'react-router-dom'
import AdminRouter from './AdminRouter'
import DriverRouter from './DriverRouter'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/admin' replace />} />

      <Route path='/admin/*' element={<AdminRouter />} />
      <Route path='/driver/*' element={<DriverRouter />} />

      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}

export default MainRouter
