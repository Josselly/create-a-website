import { useEffect, useState } from 'react'
import { Close, Mark, Menu } from './icons.jsx'
import './Navbar.css'

const links = ['Home', 'About us', 'Services', 'Cases', 'Reviews', 'FAQ']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <a className="nav__brand" href="#main">
        <Mark className="nav__mark" />
        <span>Nymera</span>
      </a>

      <nav className="nav__pill" aria-label="Primary">
        <ul>
          {links.map((label, i) => (
            <li key={label}>
              <a href="#main" className={i === 0 ? 'is-active' : undefined} aria-current={i === 0 ? 'page' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__end">
        <a className="btn btn--violet nav__cta" href="#main">Contact Us</a>
        <button
          className="nav__burger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="nav__sheet" aria-label="Mobile">
          <ul>
            {links.map((label) => (
              <li key={label}>
                <a href="#main" onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--violet nav__sheet-cta" href="#main" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>
      )}
    </header>
  )
}
