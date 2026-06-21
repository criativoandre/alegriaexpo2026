import { Link } from 'react-router-dom'
import logo from '@/assets/logo.svg'

export function SiteFooter() {
  return (
    <footer className="bg-[#070708] text-white border-t border-white/10">
      <div className="container-edge py-20 grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" />
            <div className="leading-none">
              <div className="font-display italic text-3xl text-[#f3e9d6]">Alegria</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/55 mt-2">
                Expo Brutos · Limeira · SP
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-sm text-white/65 leading-relaxed">
            A maior feira de semijoias em bruto da América Latina, no coração da tradicional Rua
            da Alegria.
          </p>
        </div>

        <FooterCol
          title="Navegar"
          links={[
            { to: '/', label: 'Home' },
            { to: '/rua-da-alegria', label: 'Rua da Alegria' },
            { to: '/expositores', label: 'Expositores' },
            { to: '/patrocinadores', label: 'Patrocinadores' },
          ]}
        />

        <FooterCol
          title="Edição 2026"
          links={[
            { to: '/', label: '26, 27 e 28 de Maio' },
            { to: '/rua-da-alegria', label: 'Como chegar' },
            { to: '/expositores', label: 'Lista de expositores' },
            { to: '/a-pagina-modelo', label: 'Página modelo' },
          ]}
        />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/45 mb-5">
            Contato
          </div>
          <a
            href="https://wa.me/5519992260693"
            className="block font-display italic text-3xl text-[#fb00e4] hover:opacity-80 transition-opacity"
          >
            (19) 99226.0693
          </a>
          <a
            href="#"
            className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.28em] text-white/70 border-b border-white/30 pb-1 hover:text-white hover:border-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge py-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
          <span>© 2026 Alegria Expo Brutos · Todos os direitos reservados</span>
          <span>Rua da Alegria · Limeira · SP</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/45 mb-5">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/80 hover:text-[#fb00e4] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
