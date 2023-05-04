import en from 'date-fns/locale/en-GB'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarIcon } from '../util'

type Props = {
  id: string
  value?: Date
  placeholder: string
  maxDate?: Date
  onChangeValue: (value: Date) => void
}

export function DateInput(props: Props) {
  return (
    <div className="date-input-wrapper">
      <CalendarIcon className="date-input-calendar-icon" />
      <DatePicker
        className="date-input"
        id={props.id}
        selected={props.value}
        maxDate={props.maxDate}
        placeholderText={props.placeholder}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        locale={en}
        onChange={props.onChangeValue}
      />
    </div>
  )
}
