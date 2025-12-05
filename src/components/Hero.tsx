import type { InvitationConfig } from '../config/invitation'

type Props = {
  couple: InvitationConfig['couple']
  actions?: InvitationConfig['actions']
}

function Hero({ couple, actions }: Props) {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="pill">INVITATION</div>
        <div className="hero-sub">
          <span>{couple.date}</span>
          <span>·</span>
          <span>{couple.venue}</span>
        </div>
        <div className="hero-names">
          {couple.groomName} &amp; {couple.brideName}
        </div>
        <p className="muted" style={{ margin: '4px 0 2px' }}>
          {couple.tagline}
        </p>
        {couple.lunar ? <span className="chip">음력 {couple.lunar}</span> : null}

        <div className="hero-meta">
          <div className="pill">시간 {couple.time}</div>
          <div className="pill">장소 {couple.venue}</div>
        </div>

        <div className="hero-actions">
          {couple.mapLinks?.naver ? (
            <a className="button button-primary" href={couple.mapLinks.naver} target="_blank" rel="noreferrer">
              네이버 지도
            </a>
          ) : null}
          {couple.mapLinks?.kakao ? (
            <a className="button" href={couple.mapLinks.kakao} target="_blank" rel="noreferrer">
              카카오맵
            </a>
          ) : null}
          {actions?.calendarLink ? (
            <a className="button" href={actions.calendarLink} target="_blank" rel="noreferrer">
              캘린더 추가
            </a>
          ) : null}
          {actions?.rsvpLink ? (
            <a className="button" href={actions.rsvpLink} target="_blank" rel="noreferrer">
              참석 전달
            </a>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Hero

