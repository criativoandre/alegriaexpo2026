import { useEffect } from 'react'

type PageMeta = {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Updates document.title and the description/Open Graph meta tags for the
 * current page. This is a client-side SPA, so this runs after mount rather
 * than on the server — search engines that execute JS (Google, Bing) will
 * still index it correctly.
 */
export function usePageMeta({ title, description, ogTitle, ogDescription }: PageMeta) {
  useEffect(() => {
    document.title = title
    if (description) setMeta('description', description)
    setMeta('og:title', ogTitle ?? title, 'property')
    if (ogDescription ?? description) {
      setMeta('og:description', ogDescription ?? description ?? '', 'property')
    }
  }, [title, description, ogTitle, ogDescription])
}
