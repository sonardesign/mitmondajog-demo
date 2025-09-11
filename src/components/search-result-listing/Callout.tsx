import React from 'react'
import { InfoIcon } from '../icons'

interface CalloutProps {
  children?: React.ReactNode
  title?: string
  text?: string
  'data-node-id'?: string
}

const Callout: React.FC<CalloutProps> = ({ 
  children, 
  title = 'Title',
  text = 'További részletekért javasolt a vonatkozó jogszabályok áttanulmányozása.', 
  'data-node-id': nodeId 
}) => {
  return (
    <aside className="srl-callout" data-node-id={nodeId} role="note" aria-label="Megjegyzés">
      <div className="srl-callout-icon">
        <InfoIcon size={24} color="#1c1f26" />
      </div>
      <div className="srl-callout-content">
        {children ?? (
          <div className="srl-callout-text">
            <div className="srl-callout-title">{title}</div>
            <div className="srl-callout-description">{text}</div>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Callout
