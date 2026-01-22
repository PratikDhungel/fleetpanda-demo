import Select from 'react-select'

export type TDropdownOption = {
  label: string | number
  value: string | number
}

interface IDropdownSelectProps {
  selectedOption: TDropdownOption | null
  setSelectedOption: (newOption: TDropdownOption) => void
  options: TDropdownOption[]
}

const DropdownSelect = ({ selectedOption, setSelectedOption, options }: IDropdownSelectProps) => {
  return (
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
  )
}

export default DropdownSelect
