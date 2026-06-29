import { useLang } from '../App'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer-header-wrap">
        <div className="footer-logo" style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/Asset/brand logo.png" 
            alt="New Alfa Towing Van Service" 
            width="80" 
            height="80" 
            loading="lazy" 
            style={{
              borderRadius: '50%',
              border: '3px solid var(--primary)',
              padding: '4px',
              background: 'var(--surface2)',
              boxShadow: '0 0 15px rgba(200, 16, 46, 0.4)'
            }}
          />
        </div>
        <div className="footer-name" style={{ color: 'var(--secondary)', fontWeight: '800' }}>NEW ALFA TOWING VAN SERVICE</div>
      </div>
      <div className="footer-tagline">{t.footerTagline}</div>
      <div className="footer-links">
        <a href="#services">{t.navServices}</a>
        <a href="#gallery">{t.navGallery}</a>
        <a href="#coverage">{t.navCoverage}</a>
        <a href="#contact">{t.navContact}</a>
        <a href="tel:+917399997789">7399997789</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} New Alfa Towing Van Service. Owner: Aslam Pinjari. All rights reserved.<br />
        <span>{t.footerAddress}</span>
      </div>
      <div className="footer-credit" style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Made with <span style={{ color: '#ff4444', animation: 'heartbeat 1.5s infinite', display: 'inline-block' }}>❤️</span> by <span style={{ color: 'var(--secondary)', fontWeight: '700', letterSpacing: '0.5px' }}>Danish Pinjari</span>
      </div>
    </footer>
  )
}
