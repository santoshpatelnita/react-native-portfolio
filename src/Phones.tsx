export type PhoneVariant = 'barber' | 'astro' | 'astrologer' | 'teacher' | 'parent'

function Status() {
  return (
    <div className="ps-status">
      <span>9:41</span>
      <span className="ps-sys"><i /><i /><b /></span>
    </div>
  )
}

function Barber() {
  return (
    <div className="screen s-barber">
      <Status />
      <div className="sb-top"><div><small>Good morning</small><strong>Book your slot</strong></div><span className="sb-bell">●</span></div>
      <div className="sb-chips"><span className="on">Haircut</span><span>Beard</span><span>Facial</span><span>Spa</span></div>
      <div className="sb-branch">
        <div className="sb-thumb" />
        <div><strong>BGC Branch</strong><small>0.8 km · till 9 PM</small></div>
        <em>★ 4.9</em>
      </div>
      <div className="sb-label">Choose barber</div>
      <div className="sb-barbers">{['A', 'M', 'J', 'R'].map((b, i) => <span key={b} className={i === 1 ? 'on' : ''}>{b}</span>)}</div>
      <div className="sb-label">Today</div>
      <div className="sb-slots">
        {['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'].map((t, i) => <span key={t} className={i === 2 ? 'on' : i === 4 ? 'off' : ''}>{t}</span>)}
      </div>
      <div className="sb-cta">Confirm booking · ₱450</div>
      <div className="ps-tabbar"><i className="on" /><i /><i /><i /></div>
    </div>
  )
}

function Astro() {
  const list = [
    { n: 'Acharya Dev', s: 'Vedic · 12 yrs', r: '4.9', p: '₹18/min', on: true },
    { n: 'Tarot Meera', s: 'Tarot · 8 yrs', r: '4.8', p: '₹25/min', on: true },
    { n: 'Pt. Raghav', s: 'KP · 15 yrs', r: '4.7', p: '₹30/min', on: false },
  ]
  return (
    <div className="screen s-astro">
      <Status />
      <div className="sa-head"><strong>Talk to Astrologer</strong><span>₹ 240</span></div>
      <div className="sa-banner"><small>First chat</small><strong>FREE for 5 min</strong></div>
      <div className="sa-tabs"><span className="on">Chat</span><span>Call</span><span>Live</span></div>
      {list.map((a) => (
        <div className="sa-row" key={a.n}>
          <div className={`sa-av${a.on ? ' online' : ''}`} />
          <div className="sa-info"><strong>{a.n}</strong><small>{a.s}</small><em>★ {a.r}</em></div>
          <div className="sa-act"><small>{a.p}</small><span>Chat</span></div>
        </div>
      ))}
      <div className="ps-tabbar"><i className="on" /><i /><i /><i /></div>
    </div>
  )
}

function Astrologer() {
  return (
    <div className="screen s-partner">
      <Status />
      <div className="sp-head"><strong>Hi, Acharya</strong><span className="sp-toggle"><i /> Online</span></div>
      <div className="sp-earn"><small>Today's earnings</small><strong>₹ 3,480</strong><div className="sp-bars">{[40, 65, 50, 80, 55, 95, 70].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div>
      <div className="sp-grid"><div><strong>24</strong><small>Chats</small></div><div><strong>9</strong><small>Calls</small></div><div><strong>4.8</strong><small>Rating</small></div></div>
      <div className="sp-req">
        <div className="sp-req-top"><span className="sp-pulse" /> Incoming chat request</div>
        <strong>Priya S. · Career</strong>
        <div className="sp-req-btns"><span>Decline</span><span className="ok">Accept</span></div>
      </div>
      <div className="ps-tabbar"><i className="on" /><i /><i /><i /></div>
    </div>
  )
}

function Teacher() {
  const kids = [['Aarav S.', 1], ['Diya K.', 1], ['Kabir M.', 0], ['Myra P.', 1], ['Vihaan R.', 1]] as const
  return (
    <div className="screen s-teacher">
      <Status />
      <div className="st-head"><strong>Attendance</strong><small>Class 7-A · Mon, 12 Sep</small></div>
      <div className="st-sum"><div><strong>34</strong><small>Present</small></div><div><strong>2</strong><small>Absent</small></div><div><strong>94%</strong><small>Rate</small></div></div>
      {kids.map(([n, p]) => (
        <div className="st-row" key={n}><span className="st-av">{n[0]}</span><strong>{n}</strong><span className={p ? 'st-p on' : 'st-p'}>P</span><span className={p ? 'st-a' : 'st-a on'}>A</span></div>
      ))}
      <div className="st-cta">Submit attendance</div>
      <div className="ps-tabbar"><i className="on" /><i /><i /><i /></div>
    </div>
  )
}

function Parent() {
  return (
    <div className="screen s-parent">
      <Status />
      <div className="sq-head"><div className="sq-av" /><div><strong>Riya's dashboard</strong><small>Class 5-B</small></div></div>
      <div className="sq-row2">
        <div className="sq-ring"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" /><circle cx="18" cy="18" r="15" className="fg" /></svg><span>96%</span><small>Attendance</small></div>
        <div className="sq-fee"><small>Fee due</small><strong>₹ 12,500</strong><span>Pay now</span></div>
      </div>
      <div className="sq-label">Homework</div>
      {[['Maths', 'Ex 4.2 · Q1–10'], ['Science', 'Draw plant cell'], ['English', 'Read chapter 6']].map(([s, t]) => (
        <div className="sq-hw" key={s}><i /><div><strong>{s}</strong><small>{t}</small></div></div>
      ))}
      <div className="ps-tabbar"><i className="on" /><i /><i /><i /></div>
    </div>
  )
}

export function PhoneMock({ variant, className = '' }: { variant: PhoneVariant; className?: string }) {
  return (
    <div className={`phone ${className}`} aria-hidden="true">
      <div className="phone-island" />
      {variant === 'barber' && <Barber />}
      {variant === 'astro' && <Astro />}
      {variant === 'astrologer' && <Astrologer />}
      {variant === 'teacher' && <Teacher />}
      {variant === 'parent' && <Parent />}
    </div>
  )
}
