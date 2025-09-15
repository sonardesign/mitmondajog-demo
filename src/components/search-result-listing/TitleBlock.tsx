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
      <h1 className="srl-title">{title}</h1>
      {isLoading && (
        <LoadingSpinner size="medium" className="srl-title-loading" />
      )}
    </header>
  )
}

export default TitleBlock
