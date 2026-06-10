import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translateY(-10px)'
    el.style.opacity = '0'
    const t = setTimeout(() => {
      el.style.transform = 'translateY(0)'
      el.style.opacity = '1'
    }, 150)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span ref={ref} style={{ display: 'inline-block', transition: 'all 0.2s ease', marginLeft: '10px' }}>
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app-container">
        <header className="bento-card hero-card">
          <div className="badge">DASHBOARD</div>
          <h1>GRID</h1>
          <p className="subtitle">Everything in its place.</p>
          
          <button className="btn" onClick={() => setCount((c) => c + 1)}>
            ADD + <CounterNum value={count} />
          </button>
        </header>

        <section className="bento-card logos-card">
          <div className="logos">
            <img src={heroImg} alt="Hero" className="logo" />
            <img src={reactLogo} alt="React" className="logo" />
            <img src={viteLogo} alt="Vite" className="logo" />
          </div>
        </section>

        <section className="bento-card">
          <h2>Stack</h2>
          <ul className="social-links">
            <li><a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite Documentation</a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React Documentation</a></li>
          </ul>
        </section>

        <section className="bento-card social-buttons-card" style={{ gridColumn: 'span 2' }}>
          <h2>Connect</h2>
          <div className="social-buttons">
            <a href="https://github.com/Ex2-Axon/x-template" className="social-button github" target="_blank" rel="noreferrer">
              <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg>
            </a>
            <a href="#" className="social-button linkedin">
              <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Icons" stroke="none" strokeWidth="1">
                  <g transform="translate(-702.000000, -265.000000)">
                      <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn"></path>
                  </g>
              </g>
              </svg>
            </a>
            <a href="https://x.com/Microtronic2" className="social-button facebook" target="_blank" rel="noreferrer">
              <span style={{color: 'white', fontWeight: 'bold'}}>X</span>
            </a>
            <a href="https://discord.gg/8Zeq8VCU" className="social-button instagram" target="_blank" rel="noreferrer">
              <span style={{color: 'white', fontWeight: 'bold'}}>DC</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Microtronic Co., Ltd. All rights reserved. Credit By Axon.</p>
        <p><a href="https://microtronic-thailand.github.io/privacy-policy/?lang=en" target="_blank" rel="noreferrer">Privacy Policy</a></p>
      </footer>
    </>
  )
}

export default App
