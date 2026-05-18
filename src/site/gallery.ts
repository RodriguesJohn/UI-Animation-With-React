export const GALLERY_HOME_ID = '__gallery__' as const

export function demoHasPreview(demo: {
  component?: unknown
  sources?: Record<string, string>
}): boolean {
  const src = demo.sources
  return Boolean(demo.component && src && Object.keys(src).length > 0)
}
