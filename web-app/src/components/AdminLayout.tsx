import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import AdminSidebar from './AdminSidebar'

const AdminLayout = () => {
  const [open, setOpen] = useState(false)

  function showSidebar() {
    setOpen(true)
  }

  function hideSidebar() {
    setOpen(false)
  }

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Hide menu when clicked on overlay in mobile view*/}
      {open && <div onClick={hideSidebar} className='fixed inset-0 bg-black/40 z-10 md:hidden' />}

      {/* Always open sidebar in desktop view */}
      <AdminSidebar open={open} hideSidebar={hideSidebar} />

      {/* Header for mobile view with menu button*/}
      <div className='flex-1 flex flex-col'>
        <header className='md:hidden bg-white shadow p-4 flex items-center'>
          <button onClick={showSidebar} className='text-xl mr-3'>
            <AiOutlineMenu />
          </button>
          <span className='text-xl font-bold'>FleetPanda Admin</span>
        </header>

        <main className='flex-1 p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
