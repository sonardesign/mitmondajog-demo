import React, { useState } from 'react'

interface TabsProps {
  options?: string[]
  'data-node-id'?: string
  onChange?: (index: number) => void
}

const Tabs: React.FC<TabsProps> = ({
  options = ['Országos jogszabályok', 'Önkormányzati rendeletek'],
  'data-node-id': nodeId,
  onChange
}) => {
  const [selected, setSelected] = useState(0)

  const handleSelect = (index: number) => {
    setSelected(index)
    onChange?.(index)
  }

  return (
    <div className="srl-tabs" role="tablist" aria-label="Eredmény kategóriák" data-node-id={nodeId}>
      {options.map((opt, idx) => (
        <button
          key={opt}
          role="tab"
          type="button"
          aria-selected={selected === idx}
          aria-controls={`srl-tabpanel-${idx}`}
          id={`srl-tab-${idx}`}
          className={`srl-tab ${selected === idx ? 'srl-tab-active' : ''}`}
          onClick={() => handleSelect(idx)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default Tabs
