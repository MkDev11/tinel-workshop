import en from 'date-fns/locale/en-GB'
import React from 'react'
import DatePicker from 'react-datepicker'
import { Controller, FieldValues } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarIcon, FormInputProps } from '../util'

type Props<T extends FieldValues> = {
  placeholder: string
  maxDate?: Date
} & FormInputProps<T>

export function DateInput<T extends FieldValues>(props: Props<T>) {
  return (
    <div className="date-input-wrapper">
      <CalendarIcon className="date-input-calendar-icon" />
      <Controller
        control={props.control}
        rules={props.rules}
        name={props.name}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={field.onChange}
            className="date-input"
            id={props.name}
            maxDate={props.maxDate}
            placeholderText={props.placeholder}
            showMonthDropdown
            showYearDropdown
            showPopperArrow={false}
            dropdownMode="select"
            locale={en}
          />
        )}
      />
    </div>
  )
}
