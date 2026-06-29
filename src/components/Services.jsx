import { useLang } from '../App'
import useScrollReveal from '../hooks/useScrollReveal'

const SERVICE_ICONS = ['🚗', '🚨', '🔧', '🔩', '⛽', '⚡', '🔓']

function ServiceCard({ icon, name, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <article
      className={`service-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}
      ref={ref}
    >
      <div className="service-icon">{icon}</div>
      <div className="service-name">{name}</div>
      <p className="service-desc">{desc}</p>
    </article>
  )
}

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t.servicesTag}</div>
          <h2 className="section-title" id="services-heading">
            {t.servicesTitle1}
            <span className="accent">{t.servicesTitle2}</span>
          </h2>
          <div className="divider" />
          <p className="section-desc">{t.servicesDesc}</p>
        </div>
        <div className="services-grid">
          {t.services.map((svc, i) => (
            <ServiceCard
              key={i}
              icon={SERVICE_ICONS[i]}
              name={svc.name}
              desc={svc.desc}
              delay={Math.min(i, 4) || null}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
