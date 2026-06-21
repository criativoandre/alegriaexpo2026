import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const expositores = [
  { name: 'A&B Brutos', category: 'Brincos · Pulseiras', booth: '01' },
  { name: 'Atelier Limeira', category: 'Colares · Tornozeleiras', booth: '02' },
  { name: 'Bragoto Joias', category: 'Brutos · Linha completa', booth: '03' },
  { name: 'Dermond Acessórios', category: 'Brincos em tubos', booth: '04' },
  { name: 'Marcone & Cia', category: 'Brutos cravejados', booth: '05' },
  { name: 'Battiston Bijoux', category: 'Pulseiras · Anéis', booth: '06' },
  { name: 'Pizzoli Premium', category: 'Colares folheados', booth: '07' },
  { name: 'Beatriz Brutos', category: 'Linha básica', booth: '08' },
  { name: 'Roma Acessórios', category: 'Tornozeleiras', booth: '09' },
  { name: 'Guilherme Bijoux', category: 'Brutos especiais', booth: '10' },
  { name: 'Alegria Joias', category: 'Linha premium', booth: '11' },
  { name: 'Limeira Brutos', category: 'Mix completo', booth: '12' },
]

export default function Expositores() {
  usePageMeta({
    title: 'Expositores — Alegria Expo Brutos 2026',
    description:
      'Conheça as marcas e fabricantes que estarão na 7ª edição da Alegria Expo Brutos, na Rua da Alegria, em Limeira.',
    ogTitle: 'Expositores · Alegria Expo Brutos',
    ogDescription: 'Fabricantes de semijoias em bruto reunidos por três dias na Rua da Alegria.',
  })

  return (
    <>
      <section className="relative panel-noir text-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="container-edge grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="tag-soft">Edição 2026</div>
            <h1 className="mt-8 font-display text-[14vw] md:text-[9rem] leading-[0.92] text-[#f3e9d6]">
              Nossos
              <br />
              <span className="display-italic text-[#fb00e4]">expositores.</span>
            </h1>
          </div>
          <p className="text-lg text-white/75 leading-relaxed max-w-md">
            Fabricantes e marcas reunidos por três dias na Rua da Alegria. Negocie direto com quem
            produz e descubra as próximas tendências do mercado.
          </p>
        </div>
      </section>

      <section className="bg-[#070708] text-white">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-4xl md:text-6xl text-[#f3e9d6]">
              <span className="display-italic">{expositores.length}</span> marcas confirmadas
            </h2>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
              Atualizado para a 7ª edição
            </div>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {expositores.map((e) => (
              <article
                key={e.booth}
                className="group relative p-8 md:p-10 bg-[#070708] hover:bg-[#0e0e16] transition-colors min-h-[280px] flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/50">
                    Estande {e.booth}
                  </div>
                  <span className="h-2 w-2 bg-[#fb00e4] rounded-full" />
                </div>
                <div>
                  <h3 className="font-display text-4xl md:text-5xl text-[#f3e9d6] leading-tight">
                    {e.name}
                  </h3>
                  <div className="mt-3 text-sm text-white/65">{e.category}</div>
                  <Link
                    to="/a-pagina-modelo"
                    className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.28em] text-white/70 border-b border-white/30 pb-1 group-hover:text-[#fb00e4] group-hover:border-[#fb00e4] transition-colors"
                  >
                    Ver perfil →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel-magenta text-white">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-display text-5xl md:text-7xl leading-[1]">
            Quer expor na <span className="display-italic">próxima edição?</span>
          </h2>
          <div className="md:justify-self-end">
            <Link to="/" className="btn-elegant is-light">
              Falar com a organização →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
