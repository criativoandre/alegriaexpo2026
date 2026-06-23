import { useParams, Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { expositores } from '@/data/expositores'

export default function PaginaExpositor() {
  const { slug } = useParams<{ slug: string }>()
  const expositor = expositores.find((e) => e.slug === slug)

  usePageMeta({
    title: expositor
      ? `${expositor.name} — Alegria Expo Brutos 2026`
      : 'Expositor não encontrado',
    description: expositor
      ? `Conheça a ${expositor.name}, expositora da 7ª edição da Alegria Expo Brutos.`
      : '',
  })

  if (!expositor) {
    return (
      <section className="bg-[#070708] text-white min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-display text-5xl text-[#f3e9d6]">Expositor não encontrado.</p>
        <Link to="/expositores" className="btn-elegant">← Voltar aos expositores</Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative panel-noir text-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="container-edge grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="tag-soft">Stand {expositor.booth} · {expositor.category}</div>
            <h1 className="mt-8 font-display text-[12vw] md:text-[8rem] leading-[0.92] text-[#f3e9d6]">
              {expositor.name}
            </h1>
          </div>

          <div className="border border-white/15 bg-white/5 aspect-square w-full max-w-[280px] flex items-center justify-center overflow-hidden">
            <img
              src={expositor.logo}
              alt={`Logo ${expositor.name}`}
              className="w-full h-full object-contain p-8"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#070708] text-white">
        <div className="container-edge py-24 md:py-32">
          <Link
            to="/expositores"
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55 hover:text-white transition-colors"
          >
            ← Voltar aos expositores
          </Link>
        </div>
      </section>
    </>
  )
}