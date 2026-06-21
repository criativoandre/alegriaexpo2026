import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const patrocinadores = [
  { name: 'Patrocinador Diamante 01', category: 'Diamante', booth: '01' },
  { name: 'Patrocinador Diamante 02', category: 'Diamante', booth: '02' },
  { name: 'Patrocinador Ouro 01', category: 'Ouro', booth: '03' },
  { name: 'Patrocinador Ouro 02', category: 'Ouro', booth: '04' },
  { name: 'Patrocinador Ouro 03', category: 'Ouro', booth: '05' },
  { name: 'Patrocinador Prata 01', category: 'Prata', booth: '06' },
  { name: 'Patrocinador Prata 02', category: 'Prata', booth: '07' },
  { name: 'Patrocinador Prata 03', category: 'Prata', booth: '08' },
  { name: 'Patrocinador Prata 04', category: 'Prata', booth: '09' },
  { name: 'Apoio 01', category: 'Apoio', booth: '10' },
  { name: 'Apoio 02', category: 'Apoio', booth: '11' },
  { name: 'Apoio 03', category: 'Apoio', booth: '12' },
]

export default function Patrocinadores() {
  usePageMeta({
    title: 'Patrocinadores — Alegria Expo Brutos 2026',
    description: 'Conheça as marcas que patrocinam a 7ª edição da Alegria Expo Brutos.',
    ogTitle: 'Patrocinadores · Alegria Expo Brutos',
    ogDescription:
      'As marcas que tornam possível a maior feira de semijoias em bruto da América Latina.',
  })

  return (
    <>
      <section className="relative panel-noir text-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="container-edge grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="tag-soft">Apoio à 7ª edição</div>
            <h1 className="mt-8 font-display text-[13vw] md:text-[9rem] leading-[0.92] text-[#f3e9d6]">
              Nossos
              <br />
              <span className="display-italic text-[#fb00e4]">patrocinadores.</span>
            </h1>
          </div>
          <p className="text-lg text-white/75 leading-relaxed max-w-md">
            Marcas que acreditam no poder do encontro presencial e ajudam a Rua da Alegria a
            continuar sendo o principal polo de semijoias do país.
          </p>
        </div>
      </section>

      <section className="bg-[#070708] text-white">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-4xl md:text-6xl text-[#f3e9d6]">
              <span className="display-italic">{patrocinadores.length}</span> parceiros
              confirmados
            </h2>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
              Atualizado para a 7ª edição
            </div>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {patrocinadores.map((p) => (
              <article
                key={p.booth}
                className="group relative p-8 md:p-10 bg-[#070708] hover:bg-[#0e0e16] transition-colors min-h-[280px] flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/50">
                    Cota {p.category}
                  </div>
                  <span className="h-2 w-2 bg-[#fb00e4] rounded-full" />
                </div>
                <div>
                  <h3 className="font-display text-4xl md:text-5xl text-[#f3e9d6] leading-tight">
                    {p.name}
                  </h3>
                  <div className="mt-3 text-sm text-white/65">Patrocinador #{p.booth}</div>
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
            Quer patrocinar a <span className="display-italic">próxima edição?</span>
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
