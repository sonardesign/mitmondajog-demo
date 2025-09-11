import React from 'react'
import '../css/components/_header.scss'

import LogoMKNJK from '../assets/jogszabalykereso-logo.svg'
import { useNavigate } from "react-router-dom";
// Material Design style inline SVG icons
const LaunchIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
)

const HelpOutlineIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
  </svg>
)

const SearchIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
)

const AccountCircleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
)

const ExpandLessIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
)

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="site-header" data-node-id="1368:16888">
      <div className="site-header__top">
        <div className="container site-header__top-inner">
          <div className="site-header__left">
            <a href="#" className="site-header__logo" aria-label="Főoldal" onClick={() => navigate('/')}>
              <img src={LogoMKNJK} alt="MKNJK – Magyar Közlöny és Nemzeti Jogszabály Kereső" />
            </a>
          </div>
          <nav className="site-header__menu" aria-label="Fő menü">
            <a href="#" className="menu-link">
              <span>Nemzeti Jogszabálytár</span>
              <LaunchIcon size={20} />
            </a>
            <a href="#" className="menu-link">
              <span>Magyar Közlöny</span>
              <LaunchIcon size={20} />
            </a>
            <a href="#" className="menu-link">
              <span>Cégközlöny</span>
              <LaunchIcon size={20} />
            </a>
          </nav>
          <div className="site-header__actions">
            <button className="icon-circle" aria-label="Súgó">
              <HelpOutlineIcon size={20} />
            </button>
            <button className="icon-circle" aria-label="Keresés">
              <SearchIcon size={20} />
            </button>
            <button className="icon-circle icon-circle--outline" aria-label="Profil">
              <AccountCircleIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="site-header__secondary">
        <div className="container site-header__secondary-inner">
          <a href="#" className="menu-link menu-link--inverse">Magyar Közlöny</a>
          <a href="#" className="menu-link menu-link--inverse">Ágazati közlöny</a>
          <a href="#" className="menu-link menu-link--inverse">Jogszabályi aktualitások</a>
          <button className="menu-link menu-link--inverse subtle has-caret" aria-expanded="true">
            <span>Hasznos linkek</span>
            <ExpandLessIcon size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
