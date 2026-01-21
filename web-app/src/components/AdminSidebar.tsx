import { NavLink } from 'react-router-dom'

const ADMIN_LINKS = [
  { name: 'Dashboard', to: '/admin' },
  { name: 'Hubs', to: '/admin/hubs' },
  { name: 'Drivers', to: '/admin/drivers' },
  { name: 'Vehicles', to: '/admin/vehicles' },
]

interface AdminSidebarProps {
  open: boolean
  hideSidebar: () => void
}

const AdminSidebar = ({ open, hideSidebar }: AdminSidebarProps) => {
  return (
    <aside
      // Always show on desktop view
      className={`fixed z-40 top-0 bottom-0 left-0 w-64 bg-white transform transition-transform duration-300
      ${open ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 md:static`}
    >
      <div className='p-4 text-xl font-bold border-b'>FleetPanda Admin</div>

      <nav className='p-4 space-y-1'>
        {ADMIN_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            onClick={hideSidebar}
            className={({ isActive }) =>
              `block px-3 py-2 rounded
              ${isActive ? 'bg-blue-400 text-white' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar
