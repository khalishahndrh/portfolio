import { NextRequest } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get('file')

  if (!(file instanceof File)) {
    return Response.json({ error: 'No file provided' }, { status: 400 })
  }

  if (!file.type.startsWith('image/')) {
    return Response.json({ error: 'File must be an image' }, { status: 400 })
  }

  if (file.size > MAX_SIZE) {
    return Response.json({ error: 'File exceeds 5 MB limit' }, { status: 413 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const webpBuffer = await sharp(buffer).webp({ quality: 85 }).toBuffer()

  const baseName = file.name.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_')
  const filename = `${Date.now()}-${baseName}.webp`
  const dest = join(process.cwd(), 'public', 'uploads', filename)

  await writeFile(dest, webpBuffer)

  return Response.json({ url: `/uploads/${filename}`, name: filename })
}
