import React from 'react'
import Button from './Button'

// Material Design style inline SVG icons
const AddIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
)

const SearchIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
)

const ButtonExample: React.FC = () => {

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>Button Component Examples</h2>
      
      {/* Primary Buttons */}
      <section>
        <h3>Primary Buttons - Brand</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" color="brand" size="xSmall">Extra Small</Button>
          <Button variant="primary" color="brand" size="small">Small</Button>
          <Button variant="primary" color="brand" size="medium">Medium</Button>
          <Button variant="primary" color="brand" size="large">Large</Button>
        </div>
      </section>

      {/* Primary with Icons */}
      <section>
        <h3>Primary with Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" color="brand" iconLeading={<AddIcon />}>Add Item</Button>
          <Button variant="primary" color="brand" iconTrailing={<SearchIcon />}>Search</Button>
          <Button variant="primary" color="brand" iconOnly icon={<AddIcon />} />
          <Button variant="primary" color="brand" iconOnly icon={<SearchIcon size={20} />} size="large" />
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h3>Color Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" color="brand">Brand</Button>
          <Button variant="primary" color="negative">Negative</Button>
          <Button variant="primary" color="inverted">Inverted</Button>
        </div>
      </section>

      {/* Button Variants */}
      <section>
        <h3>Button Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" color="brand">Primary</Button>
          <Button variant="secondary" color="brand">Secondary</Button>
          <Button variant="outline" color="brand">Outline</Button>
          <Button variant="subtle" color="brand">Subtle</Button>
        </div>
      </section>

      {/* States */}
      <section>
        <h3>Button States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" color="brand" state="enabled">Enabled</Button>
          <Button variant="primary" color="brand" state="hover">Hover</Button>
          <Button variant="primary" color="brand" state="pressed">Pressed</Button>
          <Button variant="primary" color="brand" state="loading">Loading</Button>
          <Button variant="primary" color="brand" state="disabled">Disabled</Button>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h3>Interactive Examples</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="primary" 
            color="brand" 
            onClick={() => alert('Button clicked!')}
          >
            Click Me
          </Button>
          <Button 
            variant="secondary" 
            color="negative" 
            iconLeading={<AddIcon />}
            onClick={() => alert('Add clicked!')}
          >
            Add New
          </Button>
          <Button 
            variant="outline" 
            color="brand" 
            disabled
          >
            Disabled
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ButtonExample
