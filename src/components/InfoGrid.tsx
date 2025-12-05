import type { InvitationConfig } from '../config/invitation'

type Props = {
  couple: InvitationConfig['couple']
  schedule: InvitationConfig['schedule']
}

function InfoGrid({ couple, schedule }: Props) {
  return (
    <div className="section info-grid">
      <div className="info-item">
        <h3>일시</h3>
        <strong>{couple.date}</strong>
        <span className="muted">{couple.time}</span>
      </div>
      <div className="info-item">
        <h3>장소</h3>
        <strong>{couple.venue}</strong>
        <span className="muted">{couple.address}</span>
      </div>
      {schedule.items.map((item) => (
        <div className="info-item" key={item.label}>
          <h3>{item.label}</h3>
          <strong>{item.value}</strong>
          {item.helper ? <span className="muted">{item.helper}</span> : null}
        </div>
      ))}
    </div>
  )
}

export default InfoGrid

