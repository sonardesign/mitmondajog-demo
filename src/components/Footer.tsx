import React from 'react'
import footerLogo from '../assets/footer-logo.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="tricolor">
        <div className="tricolor-line tricolor-line--red"></div>
        <div className="tricolor-line tricolor-line--white"></div>
        <div className="tricolor-line tricolor-line--green"></div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <img 
              src={footerLogo} 
              alt="Jogszabálykeresó" 
              className="footer-logo__image"
            />
          </div>

          {/* Navigation Links */}
          <nav className="footer-nav">
            <a href="#" className="footer-nav-link">Impresszum</a>
            <a href="#" className="footer-nav-link">Kapcsolat</a>
            <a href="#" className="footer-nav-link">Felhasználási feltételek</a>
            <a href="#" className="footer-nav-link">Akadálymentesítési nyilatkozat</a>
            <a href="#" className="footer-nav-link">Adatkezelési tájékoztató</a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            © A Nemzeti Jogszabálytárban elérhető szövegek tekintetében az MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont Zrt. minden jogot fenntart!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
