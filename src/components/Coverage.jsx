import { useLang } from '../App'
import useScrollReveal from '../hooks/useScrollReveal'

const AREAS = [
  { name: '📍 Jalgaon', primary: true },
  { name: '📍 Bhusawal' },
  { name: '📍 Erandol' },
  { name: '📍 Chalisgaon' },
  { name: '📍 Pachora' },
  { name: '📍 Jamner' },
  { name: '📍 Dharangaon' },
  { name: '📍 Amalner' },
  { name: '📍 Yawal' },
]

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)

export default function Coverage() {
  const { t } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="coverage" className="section section-alt" aria-labelledby="coverage-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t.coverageTag}</div>
          <h2 className="section-title" id="coverage-heading">
            {t.coverageTitle1}
            <span className="accent">{t.coverageTitle2}</span>
          </h2>
          <div className="divider" />
          <p className="section-desc">{t.coverageDesc}</p>
        </div>
        <div className="coverage-wrap">
          <div className="coverage-chips" ref={ref}>
            {AREAS.map((a, i) => (
              <span key={i} className={`chip${a.primary ? ' primary' : ''}`}>{a.name}</span>
            ))}
            <span className="chip">{t.chipMore}</span>
          </div>
          <a
            className="btn btn-primary"
            href="tel:+917399997789"
            aria-label="Call for towing near me"
          >
            <PhoneIcon />
            {t.callForHelp}
          </a>
        </div>
      </div>
    </section>
  )
}
