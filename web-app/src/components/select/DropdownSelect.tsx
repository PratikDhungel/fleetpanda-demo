import Select from 'react-select'

export type TDropdownOption = {
  label: string | number
  value: string | number
}

interface IDropdownSelectProps {
  dropdownLabel: string
  selectedOption: TDropdownOption | null
  setSelectedOption: (newOption: TDropdownOption) => void
  options: TDropdownOption[]
}

const DropdownSelect = ({
  dropdownLabel = 'Select',
  selectedOption,
  setSelectedOption,
  options,
}: IDropdownSelectProps) => {
  return (
    <div>
      <div className='mb-2'>
        <label className='font-semibold'>{dropdownLabel}</label>
      </div>

      <Select
        defaultValue={selectedOption}
        onChange={(newValue) => {
          if (newValue === null) return

          setSelectedOption(newValue)
        }}
        options={options}
        styles={{
          container: (base) => ({
            ...base,
            width: '160px',
          }),
          menu: (base) => ({
            ...base,
            zIndex: 9999,
          }),
        }}
      />
    </div>
  )
}

export default DropdownSelect
