import './demo-1.css'
import { useState } from 'react'
import NumberFlow from '@number-flow/react'

type Tab = 'preview' | 'behind'

export function Demo() {
  const [number, setNumber] = useState(1)
  const [tab, setTab] = useState<Tab>('preview')

  return (
    <div className="demo-1-wrap">
      <div className="demo-1-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'preview'}
          className={`demo-1-tab${tab === 'preview' ? ' is-active' : ''}`}
          onClick={() => setTab('preview')}
        >
          Preview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'behind'}
          className={`demo-1-tab${tab === 'behind' ? ' is-active' : ''}`}
          onClick={() => setTab('behind')}
        >
          Behind the scenes
        </button>
      </div>

      <div className="demo-1-stage">
        {tab === 'preview' ? (
          <div className="demo-1-card">
            <h1>
              <NumberFlow value={number} />
            </h1>
          </div>
        ) : (
          <div className="demo-1-cards">
            <div className="demo-1-card">
              <span className="demo-1-label">Plain</span>
              <h1>{number}</h1>
            </div>
            <div className="demo-1-card">
              <span className="demo-1-label">Animated</span>
              <h1>
                <NumberFlow value={number} />
              </h1>
            </div>
          </div>
        )}
      </div>

      <input
        className="slider"
        type="range"
        min="0"
        max="100"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
    </div>
  )
}
