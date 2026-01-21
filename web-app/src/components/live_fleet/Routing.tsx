import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import * as L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

type Props = {
  from: [number, number]
  to: [number, number]
}

export default function Routing({ from, to }: Props) {
  const map = useMap()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const routingControl = (L as any).Routing.control({
      waypoints: [L.latLng(from), L.latLng(to)],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      lineOptions: {
        styles: [{ weight: 5 }],
      },
    }).addTo(map)

    return () => {
      map.removeControl(routingControl)
    }
  }, [map, from, to])

  return null
}
