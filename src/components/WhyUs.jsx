import { useLang } from '../App'
import useScrollReveal from '../hooks/useScrollReveal'

const WHY_DATA = [
  { icon: '⚡', titleKey: 'why1Title', descKey: 'why1Desc' },
  { icon: '🛡️', titleKey: 'why2Title', descKey: 'why2Desc' },
  { icon: '🕐', titleKey: 'why3Title', descKey: 'why3Desc' },
  { icon: '💯', titleKey: 'why4Title', descKey: 'why4Desc' },
]

function WhyCard({ icon, title, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <div className={`why-card reveal${delay ? ` reveal-delay-${delay}` : ''}`} ref={ref}>
      <div className="why-icon">{icon}</div>
      <div className="why-title">{title}</div>
      <p className="why-desc">{desc}</p>
    </div>
  )
}

export default function WhyUs() {
  const { t } = useLang()
  return (
    <section id="why-us" className="section section-alt" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t.whyTag}</div>
          <h2 className="section-title" id="why-heading">
            {t.whyTitle1}
            <span className="accent-y">{t.whyTitle2}</span>
          </h2>
          <div className="divider" />
        </div>
        <div className="why-grid">
          {WHY_DATA.map((w, i) => (
            <WhyCard
              key={i}
              icon={w.icon}
              title={t[w.titleKey]}
              desc={t[w.descKey]}
              delay={i || null}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
