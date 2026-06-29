import { useLang } from '../App'
import useScrollReveal from '../hooks/useScrollReveal'

function StatItem({ number, label, delay }) {
  const ref = useScrollReveal()
  return (
    <div className={`stat-item reveal${delay ? ` reveal-delay-${delay}` : ''}`} ref={ref}>
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsBar() {
  const { t } = useLang()
  return (
    <div id="stats-bar" role="complementary" aria-label="Service statistics">
      <div className="stats-grid">
        <StatItem number="24/7" label={t.statAvail} />
        <StatItem number={<>15<span style={{ fontSize: '1rem' }}>min</span></>} label={t.statResponse} delay={1} />
        <StatItem number="3+" label={t.statCities} delay={2} />
        <StatItem number="8" label={t.statServices} delay={3} />
      </div>
    </div>
  )
}
