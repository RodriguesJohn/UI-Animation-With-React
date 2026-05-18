import { useEffect, useState } from 'react'
import { highlight } from './highlight'

type Props = {
  filename?: string
  code: string
}

function langFromFilename(filename?: string): string {
  if (!filename) return 'tsx'
  if (filename.endsWith('.tsx') || filename.endsWith('.ts')) return 'tsx'
  if (filename.endsWith('.jsx') || filename.endsWith('.js')) return 'jsx'
  if (filename.endsWith('.css')) return 'css'
  if (filename.endsWith('.html')) return 'html'
  if (filename.endsWith('.json')) return 'json'
  return 'tsx'
}

export function CodeBlock({ filename, code }: Props) {
  const [html, setHtml] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let cancelled = false
    highlight(code, langFromFilename(filename)).then((h) => {
      if (!cancelled) setHtml(h)
    })
    return () => {
      cancelled = true
    }
  }, [code, filename])

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    })
  }

  return (
    <div className="codeblock">
      <div className="codeblock-head">
        {filename ? (
          <span className="codeblock-file">{filename}</span>
        ) : (
          <span />
        )}
        <button
          type="button"
          className="codeblock-copy"
          onClick={handleCopy}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {html ? (
        <div
          className="codeblock-body shiki-wrap"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="codeblock-body">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
