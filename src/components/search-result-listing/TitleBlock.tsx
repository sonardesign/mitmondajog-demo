import React from 'react'
import LoadingSpinner from '../LoadingSpinner'

interface TitleBlockProps {
  title?: string
  subtitle?: string
  isLoading?: boolean
  'data-node-id'?: string
}

const TitleBlock: React.FC<TitleBlockProps> = ({
  title = 'Keresés találatok',
  isLoading = false,
  'data-node-id': nodeId
}) => {
  return (
    <header className="srl-title-block" data-node-id={nodeId}>
      {isLoading ? (
        <LoadingSpinner size="medium" className="srl-title-loading" />
      ) : (
        <h1 className="srl-title">{title}</h1>
      )}
    </header>
  )
}

export default TitleBlock
