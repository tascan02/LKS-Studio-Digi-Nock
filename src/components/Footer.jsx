import { navigation, siteConfig } from '../config/siteConfig'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#home" className="wordmark footer-logo">
              LKS<span>STUDIO</span>
            </a>
            <p>
              Your Trusted Partner in Apparel
              <br />
              Manufacturing, Wholesale & Export.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.map(({ id, label }) => (
              <a href={`#${id}`} key={id}>
                {id === 'collections' ? 'Our Collection' : label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <a href={`tel:${siteConfig.phoneInternational}`}>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>Delhi, India</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LKS Studio. All Rights Reserved.</p>
          <span>Quality. Comfort. Lasting partnerships.</span>
        </div>
      </div>
    </footer>
  )
}
