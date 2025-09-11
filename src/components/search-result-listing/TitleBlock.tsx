import React from 'react'

interface TitleBlockProps {
  title?: string
  subtitle?: string
  'data-node-id'?: string
}

const TitleBlock: React.FC<TitleBlockProps> = ({
  title = 'Keresés találatok',
  'data-node-id': nodeId
}) => {
  return (
    <header className="srl-title-block" data-node-id={nodeId}>
      <h1 className="srl-title">{title}</h1>
    </header>
  )
}

export default TitleBlock
