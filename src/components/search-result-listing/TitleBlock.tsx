import React from 'react'

interface TitleBlockProps {
  title?: string
  subtitle?: string
  'data-node-id'?: string
}

const TitleBlock: React.FC<TitleBlockProps> = ({
  title = 'Keresés találatok',
  subtitle = 'b0bcf638-4e63-4bea-b54e-3db63db2d020',
  'data-node-id': nodeId
}) => {
  return (
    <header className="srl-title-block" data-node-id={nodeId}>
      <h1 className="srl-title">{title}</h1>
      {subtitle && <p className="srl-subtitle">{subtitle}</p>}
    </header>
  )
}

export default TitleBlock
