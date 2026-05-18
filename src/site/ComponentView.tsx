import type { Demo } from '../demos'
import { CodeBlock } from './CodeBlock'

type Props = {
  demo: Demo
}

export function ComponentView({ demo }: Props) {
  const sources = demo.sources ?? {}
  const files = Object.entries(sources)
  const hasArtifact = files.length > 0 && demo.component
  const Preview = demo.component

  return (
    <article className="view">
      <header className="view-head">
        <div className="view-eyebrow">
          <span className="view-num">Demo {demo.number}</span>
          <span className="view-folder">{demo.folder}</span>
          <StatusBadge status={demo.status} />
        </div>
        <h1 className="view-title">{demo.name}</h1>
        <p className="view-desc">{demo.description}</p>
      </header>

      {hasArtifact && Preview ? (
        <>
          <section className="view-section">
            <h2 className="view-section-title">Preview</h2>
            <div className="preview">
              <Preview />
            </div>
          </section>

          <section className="view-section">
            <h2 className="view-section-title">Source</h2>
            <p className="view-install-hint">
              Copy {files.length === 1 ? 'this file' : 'these files'} from{' '}
              <code>{demo.folder}</code>.
            </p>
            {files.map(([name, code]) => (
              <CodeBlock key={name} filename={name} code={code} />
            ))}
          </section>
        </>
      ) : (
        <section className="view-section">
          <div className="not-built">
            <div className="not-built-dot" />
            <div>
              <div className="not-built-title">Not built yet</div>
              <div className="not-built-sub">
                Add your component under <code>{demo.folder}</code>, then wire it
                in <code>demos/registry.ts</code>.
              </div>
            </div>
          </div>
        </section>
      )}

      {demo.goals && demo.goals.length > 0 && (
        <section className="view-section">
          <h2 className="view-section-title">Ideas to try</h2>
          <ul className="goals">
            {demo.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}

function StatusBadge({ status }: { status: Demo['status'] }) {
  const label =
    status === 'done' ? 'Live' : status === 'current' ? 'In progress' : 'Upcoming'
  return <span className={`status-badge is-${status}`}>{label}</span>
}
