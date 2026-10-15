import { siteConfig } from '../config/siteConfig'

export default function BrandLogo({ className = '', onClick }) {
  return (
    <a
      href="#home"
      className={`brand-logo ${className}`}
      aria-label="LKS Studio home"
      onClick={onClick}
    >
      <img
        src={siteConfig.logo}
        alt="LKS Studio — yellow three-petal emblem"
        width="1080"
        height="1034"
        decoding="async"
      />
    </a>
  )
}
