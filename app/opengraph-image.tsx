import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Rolly Paredes - Full-Stack Developer & Designer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Rolly Paredes
        </div>
        <div
          style={{
            color: '#94a3b8',
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Full-Stack Developer & Designer
        </div>
        <div
          style={{
            color: '#64748b',
            fontSize: 24,
            textAlign: 'center',
            maxWidth: 900,
            marginTop: 20,
            lineHeight: 1.3,
          }}
        >
          Experienced administrative professional specializing in training coordination, digital operations management, and creative problem-solving
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}