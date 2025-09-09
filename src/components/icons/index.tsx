import React from 'react'

// Common icon props interface
export interface IconProps {
  size?: number
  className?: string
  color?: string
}

// Logo SVG
export const LogoIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 216 48" fill="none" className={className}>
    <rect width="216" height="48" fill={color} rx="4"/>
    <text x="108" y="30" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">NJT</text>
  </svg>
)

// External link icon
export const ExternalIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M11 3C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H6C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H11Z" fill={color}/>
    <path d="M13.5 3C13.7761 3 14 3.22386 14 3.5V7.5C14 7.77614 13.7761 8 13.5 8C13.2239 8 13 7.77614 13 7.5V4.70711L8.35355 9.35355C8.15829 9.54882 7.84171 9.54882 7.64645 9.35355C7.45118 9.15829 7.45118 8.84171 7.64645 8.64645L12.2929 4H9.5C9.22386 4 9 3.77614 9 3.5C9 3.22386 9.22386 3 9.5 3H13.5Z" fill={color}/>
  </svg>
)

// Help icon
export const HelpIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke={color} strokeWidth="1.5"/>
    <path d="M7.5 7.5C7.5 6.11929 8.61929 5 10 5C11.3807 5 12.5 6.11929 12.5 7.5C12.5 8.88071 11.3807 10 10 10V11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="13.5" r="0.5" fill={color}/>
  </svg>
)

// Search icon
export const SearchIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Account/User icon
export const AccountIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M16.25 17.5V15.8333C16.25 14.9493 15.8992 14.1014 15.2741 13.4763C14.649 12.8512 13.8011 12.5004 12.9171 12.5004H7.08375C6.19973 12.5004 5.35182 12.8512 4.72670 13.4763C4.10158 14.1014 3.75083 14.9493 3.75083 15.8333V17.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0004 9.16667C11.8414 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8414 2.5 10.0004 2.5C8.15947 2.5 6.66708 3.99238 6.66708 5.83333C6.66708 7.67428 8.15947 9.16667 10.0004 9.16667Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Chevron Down icon
export const ChevronDownIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M5 7.5L10 12.5L15 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Chevron Up icon
export const ChevronUpIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M15 12.5L10 7.5L5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Info icon
export const InfoIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color}/>
    <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Plus icon for buttons
export const PlusIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 2V14M2 8H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
