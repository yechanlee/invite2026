import type { InvitationConfig } from '../config/invitation'

type Props = {
  couple: InvitationConfig['couple']
}

const mapLabels: Record<keyof InvitationConfig['couple']['mapLinks'], string> = {
  naver: '네이버 지도',
  kakao: '카카오맵',
  google: 'Google Maps',
  apple: 'Apple 지도',
}

function MapCard({ couple }: Props) {
  const entries = Object.entries(couple.mapLinks ?? {})

  return (
    <section className="card map-card">
      <div className="section-title">
        <h2>오시는 길</h2>
        <span className="muted">{couple.address}</span>
      </div>
      <div className="muted" style={{ marginBottom: 12 }}>
        {couple.venue}
      </div>
      <div className="map-actions">
        {entries.map(([key, value]) => {
          const text = mapLabels[key as keyof typeof mapLabels] ?? key
          return (
            <a key={key} className="button" href={value} target="_blank" rel="noreferrer">
              {text}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default MapCard

