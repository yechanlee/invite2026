import { useState } from 'react'
import type { InvitationConfig } from '../config/invitation'

type Props = {
  accounts: InvitationConfig['accounts']
}

function AccountList({ accounts }: Props) {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(null), 1600)
    } catch (error) {
      console.error('copy failed', error)
    }
  }

  return (
    <section className="card section">
      <div className="section-title">
        <h2>마음 전하실 곳</h2>
        <span className="muted">따뜻한 마음만으로도 충분합니다</span>
      </div>
      <div className="account-group">
        {accounts.map((group) => (
          <div key={group.label} className="account-item">
            <div className="section-title" style={{ marginBottom: 10 }}>
              <h4 style={{ margin: 0 }}>{group.label}</h4>
            </div>
            <div className="contact-grid">
              {group.items.map((acc) => {
                const key = `${acc.bank}-${acc.number}`
                const display = `${acc.bank} ${acc.number}`
                const title = acc.note ? `${acc.name} · ${acc.note}` : acc.name
                return (
                  <article className="contact-card" key={key}>
                    <div>
                      <h4 style={{ margin: 0 }}>{title}</h4>
                      <span className="muted">{acc.bank}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                      <div style={{ fontWeight: 700 }}>{acc.number}</div>
                      <button className="button" type="button" onClick={() => handleCopy(display)}>
                        {copied === display ? '복사됨' : '복사'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AccountList

