import React from 'react'
import ReactSelect from 'react-select'

type Option = {
  value: string
  label: string
}

type Props = {
  id: string
  placeholder: string
  value?: Option
  options: Option[]
  onSelectValue: (value: string) => void
}

export function Select(props: Props) {
  return (
    <ReactSelect
      inputId={props.id}
      placeholder={props.placeholder}
      value={props.value}
      options={props.options}
      isSearchable={false}
      isClearable={false}
      captureMenuScroll={false}
      menuShouldScrollIntoView={false}
      onChange={(option) => {
        if (option) {
          props.onSelectValue(option.value)
        }
      }}
      classNames={{
        container: () => 'select-container',
        control: () => 'select-control',
        valueContainer: () => 'select-value-container',
        indicatorSeparator: () => 'select-indicator-separator',
        dropdownIndicator: () => 'select-dropdown-indicator',
        menu: () => 'select-menu',
        menuList: () => 'select-menu-list',
        option: (state) =>
          'select-option' +
          (state.isSelected ? ' select-option--selected' : ''),
      }}
    />
  )
}
