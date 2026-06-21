import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info)
  }

  reset = () => {
    this.setState({ error: null })
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div className="min-h-screen bg-[#070708] text-white flex items-center">
        <div className="container-edge">
          <div className="tag-soft">Erro inesperado</div>
          <h1 className="mt-6 font-display text-6xl md:text-8xl italic">Algo quebrou.</h1>
          <p className="mt-4 max-w-lg text-white/70">
            Tente novamente ou volte para a página inicial.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <button onClick={this.reset} className="btn-elegant is-magenta">
              Tentar de novo
            </button>
            <a href="/" className="btn-elegant">
              Ir para o início
            </a>
          </div>
        </div>
      </div>
    )
  }
}
