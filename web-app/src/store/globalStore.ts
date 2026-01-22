import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { TDropdownOption } from '@/components/select/DropdownSelect'

interface IAdminDashboardFilters {
  selectedDriverId: string | number
  vehicle: string
}

interface GlobalState {
  admin: {
    dashboardFilters: IAdminDashboardFilters
  }
  updateAdminDashboardDriverFilter: (newDriver: TDropdownOption) => void
}

const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      admin: {
        dashboardFilters: {
          selectedDriverId: 'all',
          vehicle: 'all',
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
    }),
    { name: 'global-storage' },
  ),
)

export default useGlobalStore
