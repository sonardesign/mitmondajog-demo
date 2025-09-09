import React from 'react'
import '../css/components/_banner.scss'

interface BannerProps {
  variant: 'primary' | 'secondary'
  title: string
  subtitle: string
  buttonText: string
  onClick?: () => void
}

const Banner: React.FC<BannerProps> = ({ variant, title, subtitle, buttonText, onClick }) => {
  return (
    <div 
      className={`banner banner--${variant}`} 
      data-node-id={variant === 'primary' ? '1392:38603' : '1392:38604'}
    >
      <div className="banner__content">
        <div className="banner__text">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__subtitle">{subtitle}</p>
        </div>
        <button className="banner__button" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Banner
