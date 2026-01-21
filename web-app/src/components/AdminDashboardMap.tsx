import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const AdminDashboardMap = () => {
  return (
    <MapContainer center={[40.73, -73.93]} zoom={13} scrollWheelZoom={false} className='h-[400px]'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[40.73, -73.93]} />
    </MapContainer>
  )
}

export default AdminDashboardMap
