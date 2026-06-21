import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '@/assets/logo.svg'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/rua-da-alegria', label: 'Rua da Alegria' },
  { to: '/expositores', label: 'Expositores' },
  { to: '/patrocinadores', label: 'Patrocinadores' },
  { to: '/a-pagina-modelo', label: 'Página Modelo' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-edge flex items-center justify-between py-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Alegria Expo Brutos">
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <span className="hidden sm:block leading-none">
            <span className="block font-display italic text-2xl tracking-wide text-[#f3e9d6]">
              Alegria
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.32em] text-white/55 mt-1">
              Expo Brutos · Limeira
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.28em] transition-colors ${
                  isActive ? 'text-[#fb00e4]' : 'text-white/75 hover:text-[#fb00e4]'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/expositores" className="btn-elegant !py-2.5 !px-5 !text-sm">
            Fale conosco
          </Link>
        </nav>

        <button
          className="lg:hidden border border-white/40 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#070708] border-t border-white/10">
          <div className="container-edge flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display italic text-3xl text-[#f3e9d6]"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
