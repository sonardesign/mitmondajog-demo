import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-node-id="1457:15308">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img 
                src="/src/assets/jogszabalykereso-logo.svg" 
                alt="Jogszabálykeresó" 
                className="footer-logo__image"
              />
            </div>
            <p className="footer-description">
              Magyarország legátfogóbb jogi adatbázisa. Keresse meg a válaszokat jogi kérdéseire egyszerűen és gyorsan.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Szolgáltatások</h3>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Jogszabálykeresés</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Közérdekű adatok</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Jogi tanácsadás</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Dokumentumok</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Információk</h3>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Rólunk</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Kapcsolat</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">GYIK</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Támogatás</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Jogi információk</h3>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Adatvédelmi szabályzat</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Felhasználási feltételek</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Cookie szabályzat</a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">Jogi nyilatkozat</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Kapcsolat</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <i className="ri-mail-line footer-contact-icon"></i>
                <span className="footer-contact-text">info@jogszabalykereso.hu</span>
              </div>
              <div className="footer-contact-item">
                <i className="ri-phone-line footer-contact-icon"></i>
                <span className="footer-contact-text">+36 1 234 5678</span>
              </div>
              <div className="footer-contact-item">
                <i className="ri-map-pin-line footer-contact-icon"></i>
                <span className="footer-contact-text">1051 Budapest, Október 6. utca 12.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p className="footer-copyright-text">
                © 2024 Jogszabálykeresó. Minden jog fenntartva.
              </p>
            </div>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
