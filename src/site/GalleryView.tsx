import type { ComponentType } from 'react'
import type { Demo } from '../demos'
import { demoHasPreview } from './gallery'

type Props = {
  demos: Demo[]
  onOpenDemo: (id: string) => void
}

export function GalleryView({ demos, onOpenDemo }: Props) {
  return (
    <article className="view view-gallery">
      <header className="view-head view-head-tight">
        <h1 className="view-title">All animations</h1>
      </header>

      <ul className="gallery-grid gallery-grid-flat">
        {demos.map((demo) => (
          <GalleryCard
            key={demo.id}
            demo={demo}
            onOpen={() => onOpenDemo(demo.id)}
          />
        ))}
      </ul>
    </article>
  )
}

function GalleryCard({
  demo,
  onOpen,
}: {
  demo: Demo
  onOpen: () => void
}) {
  const live = demoHasPreview(demo)
  const Preview = demo.component

  return (
    <li className="gallery-tile">
      <button type="button" className="gallery-tile-btn" onClick={onOpen}>
        <div
          className={`gallery-card-stage${live ? ' is-live' : ''}`}
          aria-hidden="true"
        >
          {live && Preview ? (
            <GalleryLiveThumb Component={Preview} />
          ) : (
            <GalleryPlaceholderGraphic />
          )}
        </div>
        <div className="gallery-card-meta">
          <span className="gallery-card-name">
            {demo.folder.split('/').pop() ?? demo.id}
          </span>
        </div>
      </button>
    </li>
  )
}

function GalleryLiveThumb({
  Component,
}: {
  Component: ComponentType
}) {
  return (
    <div className="gallery-card-live">
      <div className="gallery-card-live-scale">
        <Component />
      </div>
    </div>
  )
}

function GalleryPlaceholderGraphic() {
  return (
    <div className="gallery-card-fake">
      <div className="gallery-card-fake-card" />
      <div className="gallery-card-fake-lines">
        <span className="gallery-card-fake-line" />
        <span className="gallery-card-fake-line is-short" />
      </div>
    </div>
  )
}
