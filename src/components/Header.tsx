import React from 'react'
import logo from '../assets/img/logo/full.svg'
import { Cart } from './Cart'

export function Header() {
  return (
    <header>
      <div className="header-content container">
        <a href="/" className="logo-wrapper">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <Cart />
      </div>
    </header>
  )
}
