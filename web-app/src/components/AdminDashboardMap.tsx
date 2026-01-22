import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import DestinationRouting from './live_fleet/DestinationRouting'

const FALLBACK_MAP_CENTER = {
  lat: 40.75,
  lng: -73.98,
}

interface IMapData {
  id: number
  start: [number, number]
  startMessage: string
  end: [number, number]
  endMessage: string
}

interface AdminDashboardMapProps {
  mapData: IMapData[]
}

const AdminDashboardMap = ({ mapData }: AdminDashboardMapProps) => {
  return (
    <MapContainer
      center={mapData[0]?.start || FALLBACK_MAP_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      className='h-[400px]'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {mapData.length &&
        mapData.map((eachRoute) => {
          return (
            <div key={eachRoute.id}>
              <Marker position={eachRoute.start} zIndexOffset={1000}>
                <Popup>{eachRoute.startMessage}</Popup>
              </Marker>

              <Marker position={eachRoute.end} zIndexOffset={1000}>
                <Popup>{eachRoute.endMessage}</Popup>
              </Marker>

              <DestinationRouting from={eachRoute.start} to={eachRoute.end} />
            </div>
          )
        })}
    </MapContainer>
  )
}

export default AdminDashboardMap
