import type { Demo } from '../demos'
import { demoHasPreview } from './gallery'

type Props = {
  demos: Demo[]
  activeId: string
  onSelect: (id: string) => void
  builtCount: number
  total: number
}

export function Sidebar({
  demos,
  activeId,
  onSelect,
  builtCount,
  total,
}: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-mark" />
        <span>ui-animation/react</span>
      </div>

      <p className="sidebar-stat">
        <span className="sidebar-stat-n">{builtCount}</span>
        <span className="sidebar-stat-sep">/</span>
        <span>{total}</span>
        <span className="sidebar-stat-label"> live</span>
      </p>

      <nav className="sidebar-nav" aria-label="Demos">
        <ul className="sidebar-list sidebar-list-demos">
          {demos.map((demo) => {
            const label = demo.folder.split('/').pop() ?? demo.id
            const active = demo.id === activeId
            const live = demoHasPreview(demo)
            return (
              <li key={demo.id}>
                <button
                  type="button"
                  className={`sidebar-item${active ? ' is-active' : ''}${live ? ' is-live' : ' is-placeholder'}`}
                  onClick={() => onSelect(demo.id)}
                  aria-label={label}
                >
                  <span className="sidebar-item-pip" aria-hidden="true" />
                  <span className="sidebar-item-name">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
