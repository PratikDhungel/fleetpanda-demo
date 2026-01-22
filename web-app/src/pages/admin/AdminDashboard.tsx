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
      startMessage: `Driver: ${transitOrder.driver_name} with Truck: ${transitOrder.vehicle_registration}`,
      end: [transitOrder.destination_lat, transitOrder.destination_lng] as [number, number],
      endMessage: `Destination: ${transitOrder.destination_name}`,
      driverID: transitOrder.driver_id,
      vehicleId: transitOrder.vehicle_id,
    }
  })

  const driverSelectOptions = data.map((transitOrder) => ({
    label: transitOrder.driver_name,
    value: transitOrder.driver_id,
  })) as TDropdownOption[]

  driverSelectOptions.unshift({ label: 'All', value: 'all' })

  const vehicleSelectOptions = data.map((transitOrder) => ({
    label: transitOrder.vehicle_registration,
    value: transitOrder.vehicle_id,
  })) as TDropdownOption[]

  vehicleSelectOptions.unshift({ label: 'All', value: 'all' })

  return { mapData, driverSelectOptions, vehicleSelectOptions }
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
      dashboardFilters: { selectedDriverId, selectedVehicleId },
    },
    updateAdminDashboardDriverFilter,
    updateAdminDashboardVehicleFilter,
  } = useGlobalStore()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Error Loading Live Fleet Map</div>
  }

  const { mapData, driverSelectOptions, vehicleSelectOptions } = transformOrdersData(data)

  const selectedDriverOption = driverSelectOptions.find((driver) => driver.value === selectedDriverId)!
  const selectedVehicleOption = vehicleSelectOptions.find((driver) => driver.value === selectedVehicleId)!

  const filteredMapData = mapData.filter((each) => {
    const isDriverSelected = selectedDriverId === 'all' || selectedDriverId === each.driverID
    const isVehicleSelected = selectedVehicleId === 'all' || selectedVehicleId === each.vehicleId

    return isDriverSelected && isVehicleSelected
  })

  return (
    <div>
      <div className='mb-4'>
        <span className='text-xl font-bold'>Live Fleet Map</span>
      </div>

      <div className='flex wrap gap-4 mb-5'>
        <DropdownSelect
          dropdownLabel='Select Driver'
          options={driverSelectOptions}
          selectedOption={selectedDriverOption}
          setSelectedOption={updateAdminDashboardDriverFilter}
        />

        <DropdownSelect
          dropdownLabel='Select Vehicle'
          options={vehicleSelectOptions}
          selectedOption={selectedVehicleOption}
          setSelectedOption={updateAdminDashboardVehicleFilter}
        />
      </div>

      <AdminDashboardMap mapData={filteredMapData} />
    </div>
  )
}

export default AdminDashboard
