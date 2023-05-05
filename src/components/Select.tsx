import React from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import ReactSelect from 'react-select'
import { FormInputProps } from '../util'

type Option = {
  value: string
  label: string
}

type Props<T extends FieldValues> = {
  placeholder: string
  options: Option[]
} & FormInputProps<T>

export function Select<T extends FieldValues>(props: Props<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({ field }) => (
        <ReactSelect
          onChange={field.onChange}
          inputId={props.name}
          placeholder={props.placeholder}
          options={props.options}
          isSearchable={false}
          isClearable={false}
          captureMenuScroll={false}
          menuShouldScrollIntoView={false}
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
      )}
    />
  )
}
