import { createContext, useContext, useState, useEffect } from 'react'
import { Agentation } from 'agentation'
import translations from './i18n'
import AlertBar from './components/AlertBar'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import FloatBar from './components/FloatBar'
import Footer from './components/Footer'

// Language & Theme Context
export const AppContext = createContext()
export const useApp = () => useContext(AppContext)
export const useLang = () => useContext(AppContext) // Keep alias for backward compatibility

export default function App() {
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const t = translations[lang]

  // Update html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Update html class for theme switching
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      <AlertBar />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Gallery />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <FloatBar />
      {import.meta.env.DEV && <Agentation />}
    </AppContext.Provider>
  )
}
