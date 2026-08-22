'use client'

import { useEffect } from 'react'

const CHAT_SRC = 'https://code.tidio.co/rutgwh42zrdlsysprgyp5yge1s6sscd6.js'

/** Loads chat after intent is shown, keeping the first viewport lightweight. */
export function DeferredChat() {
  useEffect(() => {
    let loaded = false

    const load = () => {
      if (loaded) return
      loaded = true
      window.clearTimeout(timeout)
      window.removeEventListener('pointerdown', load)
      window.removeEventListener('keydown', load)
      window.removeEventListener('scroll', load)

      const script = document.createElement('script')
      script.src = CHAT_SRC
      script.async = true
      document.body.appendChild(script)
    }

    const timeout = window.setTimeout(load, 8000)
    window.addEventListener('pointerdown', load, { once: true, passive: true })
    window.addEventListener('keydown', load, { once: true })
    window.addEventListener('scroll', load, { once: true, passive: true })

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener('pointerdown', load)
      window.removeEventListener('keydown', load)
      window.removeEventListener('scroll', load)
    }
  }, [])

  return null
}
