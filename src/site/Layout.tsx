import { useMemo, useState } from 'react'
import { demos } from '../demos'
import { Sidebar } from './Sidebar'
import { ComponentView } from './ComponentView'
import { demoHasPreview } from './gallery'
import './layout.css'

export function Layout() {
  const [activeId, setActiveId] = useState<string>(demos[0]?.id ?? '')

  const builtCount = useMemo(
    () => demos.filter((d) => demoHasPreview(d)).length,
    [],
  )

  const active = demos.find((d) => d.id === activeId)

  return (
    <div className="layout">
      <Sidebar
        demos={demos}
        activeId={activeId}
        onSelect={setActiveId}
        builtCount={builtCount}
        total={demos.length}
      />
      <main className="content">
        {active ? (
          <ComponentView demo={active} />
        ) : (
          <div className="empty">Pick a demo from the sidebar.</div>
        )}
      </main>
    </div>
  )
}
