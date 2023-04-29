import React from 'react'

export function Footer() {
  return (
    <footer>
      <div className="footer-content container">
        &copy; TINEL Meetup {new Date().getFullYear()}.
      </div>
    </footer>
  )
}
