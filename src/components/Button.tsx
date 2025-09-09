import React from 'react'

export interface ButtonProps {
  // Content
  children?: React.ReactNode
  label?: string
  
  // Variants
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle'
  color?: 'brand' | 'neutral' | 'negative' | 'inverted'
  size?: 'xSmall' | 'small' | 'medium' | 'large'
  
  // States
  state?: 'enabled' | 'hover' | 'pressed' | 'focused' | 'loading' | 'disabled'
  
  // Icon support
  iconOnly?: boolean
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode
  icon?: React.ReactNode // for icon-only buttons
  
  // HTML attributes
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  'data-node-id'?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  variant = 'primary',
  color = 'brand',
  size = 'medium',
  state = 'enabled',
  iconOnly = false,
  iconLeading,
  iconTrailing,
  icon,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  'data-node-id': nodeId,
  ...props
}) => {
  // Determine if button is actually disabled
  const isDisabled = disabled || state === 'disabled'
  
  // Build CSS classes
  const baseClass = 'button'
  const variantClass = `button--${variant}`
  const colorClass = `button--${color}`
  const sizeClass = `button--${size}`
  const stateClass = state !== 'enabled' ? `button--${state}` : ''
  const iconOnlyClass = iconOnly ? 'button--icon-only' : ''
  
  const buttonClasses = [
    baseClass,
    variantClass,
    colorClass,
    sizeClass,
    stateClass,
    iconOnlyClass,
    className
  ].filter(Boolean).join(' ')
  
  // Loading spinner component
  const LoadingSpinner = ({ size: spinnerSize }: { size: 'small' | 'medium' | 'large' }) => {
    const spinnerSizes = {
      small: 'spinner--small',
      medium: 'spinner--medium', 
      large: 'spinner--large'
    }
    
    return (
      <div className={`spinner ${spinnerSizes[spinnerSize]}`}>
        <div className="spinner__icon" />
      </div>
    )
  }
  
  // Determine spinner size based on button size
  const getSpinnerSize = () => {
    if (size === 'xSmall' || size === 'small') return 'small'
    if (size === 'large') return 'large'
    return 'medium'
  }
  
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={buttonClasses}
      data-node-id={nodeId}
      {...props}
    >
      {state === 'loading' ? (
        <LoadingSpinner size={getSpinnerSize()} />
      ) : (
        <>
          {iconLeading && <span className="button__icon button__icon--leading">{iconLeading}</span>}
          {iconOnly && icon && <span className="button__icon">{icon}</span>}
          {!iconOnly && (children || label) && (
            <span className="button__label">{children || label}</span>
          )}
          {iconTrailing && <span className="button__icon button__icon--trailing">{iconTrailing}</span>}
        </>
      )}
    </button>
  )
}

export default Button
