import { useState, useEffect } from 'react'
import { useApp } from '../App'

export default function Header() {
  const { lang, setLang, theme, toggleTheme } = useApp()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''} role="banner">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="nav-logo" href="#hero" aria-label="New Alfa Towing Van Service Home">
          <img src="/Asset/brand logo.png" alt="New Alfa Towing Van Service Logo" width="52" height="52" />
          <div className="nav-brand-text">
            <span>NEW ALFA</span>
            <span>TOWING VAN SERVICE</span>
          </div>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle light/dark mode"
            title="Toggle Theme"
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text)',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'light' ? (
              // Moon Icon for turning dark
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              // Sun Icon for turning light
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language switcher">
            {['en', 'hi', 'mr'].map((l) => (
              <button
                key={l}
                id={`lang-${l}`}
                className={`lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                aria-label={l === 'en' ? 'English' : l === 'hi' ? 'Hindi' : 'Marathi'}
              >
                {l === 'en' ? 'EN' : l === 'hi' ? 'हिं' : 'मरा'}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
