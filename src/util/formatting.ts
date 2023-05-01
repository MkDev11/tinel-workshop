export class DateFormatter {
  static DEFAULT = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export class TimeFormatter {
  static DEFAULT = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  })
}

export class PriceFormatter {
  static DEFAULT = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
}
