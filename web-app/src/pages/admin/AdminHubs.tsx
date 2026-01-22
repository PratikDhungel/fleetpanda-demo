import { type ColumnDef } from '@tanstack/react-table'

import useApiQuery from '@/hooks/useApiQuery'
import DataTable from '@/components/tables/DataTable'

import type { Hub } from '@/types/hubs'

const AdminHubs = () => {
  const {
    data = [],
    isError,
    isLoading,
  } = useApiQuery<Hub[]>({
    queryKey: ['all-hubs'],
    url: '/hubs/all-hubs',
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Error loading hubs</div>
  }

  const columns: ColumnDef<Hub>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'type',
      header: 'Type',
    },
    {
      accessorKey: 'address',
      header: 'Address',
    },
  ]

  return (
    <div>
      <div className='mb-4 flex justify-between'>
        <span className='text-xl font-bold'>Hubs</span>
        <button>Add New Hub</button>
      </div>

      <DataTable<Hub> data={data} columns={columns} />
    </div>
  )
}

export default AdminHubs
