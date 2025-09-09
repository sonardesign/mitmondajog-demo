import React from 'react'
import './Home.scss'
import SliderItem from './SliderItem'

const KozlonyokSection: React.FC = () => {
  return (
    <section className="kozlonyok-section" aria-labelledby="kozlonyok-heading" data-node-id="1364:16483">
      <div className="container">
        <h2 id="kozlonyok-heading" className="heading-2">Közlönyök</h2>

        {/* Content switcher */}
        <div className="content-switcher" role="tablist" aria-label="Közlönyök váltó" data-node-id="1364:16485">
          <button role="tab" aria-selected="true" className="segment active">Magyar Közlöny</button>
          <button role="tab" aria-selected="false" className="segment">Ágazati közlöny</button>
        </div>

        {/* Items row (skeleton markup for now) */}
        <div className="items-row">
          <button className="icon-btn" aria-label="balra">
            <span aria-hidden>‹</span>
          </button>

          <SliderItem 
            title="Magyar Közlöny 2025. évi 61. szám"
            date="2025. május 23."
            onClick={() => console.log('Slider item clicked')}
          />

          <SliderItem 
            title="Magyar Közlöny 2025. évi 60. szám"
            date="2025. május 22."
            onClick={() => console.log('Slider item clicked')}
          />

          <SliderItem 
            title="Magyar Közlöny 2025. évi 60. szám"
            date="2025. május 22."
            onClick={() => console.log('Slider item clicked')}
          />

          <button className="icon-btn" aria-label="jobbra">
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default KozlonyokSection
