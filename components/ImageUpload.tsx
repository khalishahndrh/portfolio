'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

type UploadResult = { url: string; name: string }

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<UploadResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setResult(null)
    setError(null)
    setPreview(URL.createObjectURL(file))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const file = inputRef.current?.files?.[0]
    if (!file) return

    setPending(true)
    setError(null)
    setResult(null)

    try {
      const body = new FormData()
      body.append('file', file)

      const res = await fetch('/api/upload', { method: 'POST', body })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Upload failed')
      } else {
        setResult(data as UploadResult)
      }
    } catch {
      setError('Network error — please try again')
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <label className="cursor-pointer btn-primary text-base px-6 py-3">
        Choose Image
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp,image/avif"
          onChange={handleFileChange}
          className="sr-only"
        />
      </label>

      {preview && (
        <div className="relative w-48 h-48 rounded overflow-hidden border border-[var(--border)]">
          <Image src={preview} alt="Preview" fill className="object-cover" unoptimized />
        </div>
      )}

      {preview && (
        <button
          type="submit"
          disabled={pending}
          className="btn-primary text-base px-6 py-3 disabled:opacity-50"
        >
          {pending ? 'Converting…' : 'Upload as WebP'}
        </button>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {result && (
        <div className="text-center text-sm text-[var(--text-muted)]">
          <p>Uploaded: <code className="text-[var(--accent)]">{result.name}</code></p>
          <a href={result.url} target="_blank" rel="noopener" className="underline hover:text-[var(--accent)]">
            View WebP
          </a>
        </div>
      )}
    </form>
  )
}
