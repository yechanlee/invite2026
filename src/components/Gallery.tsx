import type { InvitationConfig } from '../config/invitation'

type Props = {
  gallery: InvitationConfig['gallery']
}

function Gallery({ gallery }: Props) {
  if (!gallery?.length) return null

  return (
    <section className="card gallery">
      <div className="section-title">
        <h2>기억들</h2>
        <span className="muted">소중한 순간을 나눕니다</span>
      </div>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />
        ))}
      </div>
    </section>
  )
}

export default Gallery

