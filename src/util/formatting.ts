export class DateFormatter {
  static EUROPEAN = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export class TimeFormatter {
  static HOUR_MINUTES = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
}
