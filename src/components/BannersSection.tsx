import React from 'react'
import Banner from './Banner'
import '../css/components/_banners-section.scss'

const BannersSection: React.FC = () => {
  return (
    <section className="banners-section" data-node-id="1392:38602">
      <div className="container">
        <div className="banners-section__content">
          <Banner
            variant="primary"
            title="Legyen naprakész a jogszabályok változásában!"
            subtitle="Regisztráljon és próbálja ki a jogszabályfigyelőnket!"
            buttonText="Regisztrálok"
            onClick={() => console.log('Primary banner clicked')}
          />
          <Banner
            variant="secondary"
            title="Ne maradjon le a friss jogszabályokról!"
            subtitle="Iratkozzon fel hírlevelünkre!"
            buttonText="Feliratkozom"
            onClick={() => console.log('Secondary banner clicked')}
          />
        </div>
      </div>
    </section>
  )
}

export default BannersSection
