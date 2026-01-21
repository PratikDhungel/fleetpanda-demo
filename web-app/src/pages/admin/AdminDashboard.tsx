import AdminDashboardMap from '@/components/AdminDashboardMap'

import useApiQuery from '@/hooks/useApiQuery'

import type { OrdersInTransit } from '@/types/orders'

function mapOrdersDataToMap(data: OrdersInTransit[]) {
  return data.map((transitOrder) => {
    return {
      id: transitOrder.order_id,
      start: [transitOrder.lat, transitOrder.lng] as [number, number],
      startMessage: `Current Driver: ${transitOrder.driver_name}`,
      end: [transitOrder.destination_lat, transitOrder.destination_lng] as [number, number],
      endMessage: `Destination: ${transitOrder.destination_name}`,
    }
  })
}

const AdminDashboard = () => {
  const {
    data = [],
    isError,
    isLoading,
  } = useApiQuery<OrdersInTransit[]>({
    queryKey: ['orders-in-transit'],
    url: '/orders/all-transit-orders',
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Error Loading Live Fleet Map</div>
  }

  const mapData = mapOrdersDataToMap(data)

  return (
    <div>
      <div className='mb-4'>
        <span className='text-xl font-bold'>Live Fleet Map</span>
      </div>

      <AdminDashboardMap mapData={mapData} />
    </div>
  )
}

export default AdminDashboard
