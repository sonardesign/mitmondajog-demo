import React from 'react'
import '../css/components/_slider-item.scss'

// Material Design style chevron right icon
const ChevronRightIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
  </svg>
)

interface SliderItemProps {
  title: string
  date: string
  onClick?: () => void
}

const SliderItem: React.FC<SliderItemProps> = ({ title, date, onClick }) => {
  return (
    <div className="slider-item" data-node-id="1390:38573" onClick={onClick}>
      <div className="slider-item__content">
        <div className="slider-item__text">
          <h3 className="slider-item__title">{title}</h3>
          <p className="slider-item__date">{date}</p>
        </div>
      </div>
      <div className="slider-item__arrow">
        <button className="slider-item__arrow-btn" aria-label="Megnyitás">
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </div>
  )
}

export default SliderItem
