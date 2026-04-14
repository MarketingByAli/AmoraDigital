import { useEffect } from 'react'

type JsonLdProps = {
  /** Unique DOM id for this script (e.g. `jsonld-faq-aiseo`). */
  id: string
  /** Schema.org object; should be stable for the lifetime of the page. */
  schema: object
}

/** Injects JSON-LD into `document.head` and removes it on unmount. */
export default function JsonLd({ id, schema }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [id, schema])

  return null
}
