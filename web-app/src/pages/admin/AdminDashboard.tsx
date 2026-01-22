import AdminDashboardMap from '@/components/AdminDashboardMap'
import DropdownSelect, { type TDropdownOption } from '@/components/select/DropdownSelect'

import useApiQuery from '@/hooks/useApiQuery'
import useGlobalStore from '@/store/globalStore'

import type { OrdersInTransit } from '@/types/orders'

function transformOrdersData(data: OrdersInTransit[]) {
  const mapData = data.map((transitOrder) => {
    return {
      id: transitOrder.order_id,
      start: [transitOrder.lat, transitOrder.lng] as [number, number],
      startMessage: `Current Driver: ${transitOrder.driver_name}`,
      end: [transitOrder.destination_lat, transitOrder.destination_lng] as [number, number],
      endMessage: `Destination: ${transitOrder.destination_name}`,
      driverID: transitOrder.driver_id,
    }
  })

  const driverSelectOptions = data.map((transitOrder) => ({
    label: transitOrder.driver_name,
    value: transitOrder.driver_id,
  })) as TDropdownOption[]

  driverSelectOptions.unshift({ label: 'All', value: 'all' })

  return { mapData, driverSelectOptions }
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

  const {
    admin: {
      dashboardFilters: { selectedDriverId },
    },
    updateAdminDashboardDriverFilter,
  } = useGlobalStore()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Error Loading Live Fleet Map</div>
  }

  const { mapData, driverSelectOptions } = transformOrdersData(data)
  const selectedDriverOption = driverSelectOptions.find((driver) => driver.value === selectedDriverId)!

  const filteredMapData = mapData.filter(
    (each) => selectedDriverId === 'all' || each.driverID === selectedDriverId,
  )

  return (
    <div>
      <div className='mb-4'>
        <span className='text-xl font-bold'>Live Fleet Map</span>
      </div>

      <div className='flex gap-3 mb-5'>
        <DropdownSelect
          options={driverSelectOptions}
          selectedOption={selectedDriverOption}
          setSelectedOption={updateAdminDashboardDriverFilter}
        />
      </div>

      <AdminDashboardMap mapData={filteredMapData} />
    </div>
  )
}

export default AdminDashboard
