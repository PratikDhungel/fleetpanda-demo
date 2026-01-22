import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { TDropdownOption } from '@/components/select/DropdownSelect'

interface IAdminDashboardFilters {
  selectedDriverId: string | number
  selectedVehicleId: string | number
}

interface GlobalState {
  admin: {
    dashboardFilters: IAdminDashboardFilters
  }
  updateAdminDashboardDriverFilter: (newDriver: TDropdownOption) => void
  updateAdminDashboardVehicleFilter: (newVehicle: TDropdownOption) => void
}

const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      admin: {
        dashboardFilters: {
          selectedDriverId: 'all',
          selectedVehicleId: 'all',
        },
      },
      updateAdminDashboardDriverFilter: (newDriver: TDropdownOption) =>
        set((state) => {
          return {
            admin: {
              ...state.admin,
              dashboardFilters: { ...state.admin.dashboardFilters, selectedDriverId: newDriver.value },
            },
          }
        }),
      updateAdminDashboardVehicleFilter: (newVehicle: TDropdownOption) =>
        set((state) => {
          return {
            admin: {
              ...state.admin,
              dashboardFilters: { ...state.admin.dashboardFilters, selectedVehicleId: newVehicle.value },
            },
          }
        }),
    }),
    { name: 'global-storage' },
  ),
)

export default useGlobalStore
