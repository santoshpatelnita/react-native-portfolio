import { useEffect, useRef, useState } from 'react'
import {
  Apple, ArrowDownRight, ArrowUpRight, Award, BadgeCheck, BriefcaseBusiness, Check, Copy,
  Download, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, Play, ShieldCheck,
  Sparkles, Star, Users, Workflow, X, Store, Github,
} from 'lucide-react'
import { PhoneMock, type PhoneVariant } from './Phones'

const EMAIL = 'patelsantoshsingh3@gmail.com'
const PHONE = '+91 63904 82917'
const PHONE_LINK = 'tel:+916390482917'
const LINKEDIN = 'https://www.linkedin.com/in/santoshpatelnita/'
const GITHUB = 'https://github.com/santoshpatelnita'
const CV_URL = `${import.meta.env.BASE_URL}Santosh_Kumar_CV.pdf`
const MAIL_SUBJECT = 'React Native opportunity'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(MAIL_SUBJECT)}`

// Copies the email so the visitor always has it, even when no mail app is set up for mailto: links.
async function copyText(text: string) {
  try { await navigator.clipboard.writeText(text); return true } catch { /* fall through */ }
  try {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'
    document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok
  } catch { return false }
}

type StoreLink = { label: string; kind: 'play' | 'apple' | 'dev'; href: string }
type Stat = { value: string; label: string }
type Project = {
  name: string
  kind: string
  period: string
  company: string
  description: string
  features: string[]
  stack: string[]
  stats: Stat[]
  links: StoreLink[]
  phone: PhoneVariant
  accent: string
}

const projects: Project[] = [
  {
    name: "Bruno's Barbers",
    kind: 'Salon & grooming booking',
    period: '2026',
    company: 'Clover Infotech',
    description:
      'A salon and grooming booking app for the Philippines, built end to end from scratch. I architected the app structure and state layer, and shipped it to both stores.',
    features: [
      'Branch discovery', 'Barber & service selection', 'Real-time slot availability', 'Group booking',
      'Products & services shop', 'Invoice download', 'Loyalty rewards', 'Deep linking',
      'Push notifications (FCM)', 'Firebase App Distribution', 'Intercom in-app support', 'OTP login & SSL pinning',
    ],
    stack: ['React Native 0.82', 'React 19', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Firebase', 'Kotlin / Swift modules'],
    stats: [{ value: '0 → 1', label: 'Built from scratch' }, { value: 'iOS + Android', label: 'Live on both stores' }, { value: 'RN 0.82', label: 'Latest React Native' }],
    links: [
      { label: 'Google Play', kind: 'play', href: 'https://play.google.com/store/apps/details?id=com.bsc.brunos' },
      { label: 'App Store', kind: 'apple', href: 'https://apps.apple.com/us/app/brunos-barbers/id6783700823' },
    ],
    phone: 'barber',
    accent: '#f5b84b',
  },
  {
    name: 'InstaAstro: Talk to Astrologer',
    kind: 'Live consultation',
    period: '2023 – 2025',
    company: 'InstaAstro',
    description: 'Customer app for live chat and call consultations with astrologers. I built features, tuned performance and owned the release cycle on Android and iOS.',
    features: ['Live chat & call consultations', 'Wallet & recharge flow', 'Performance tuning', 'Crash fixes & stability'],
    stack: ['React Native', 'Redux', 'REST APIs', 'FCM'],
    stats: [{ value: '4.5★', label: 'App Store rating' }, { value: '977', label: 'Ratings' }],
    links: [
      { label: 'Google Play', kind: 'play', href: 'https://play.google.com/store/apps/details?id=com.instaastro.onlineastrology' },
      { label: 'App Store', kind: 'apple', href: 'https://apps.apple.com/us/app/instaastro-talk-to-astrologer/id1547565515' },
    ],
    phone: 'astro',
    accent: '#ff8a4c',
  },
  {
    name: 'InstaAstro App for Astrologer',
    kind: 'Partner app',
    period: '2023 – 2025',
    company: 'InstaAstro',
    description: 'Partner app where astrologers go online, accept chat and call requests, and track their consultation history and earnings.',
    features: ['Online / offline status', 'Accept chat & call requests', 'Consultation history', 'Earnings & payments'],
    stack: ['React Native', 'Android', 'iOS', 'Push notifications'],
    stats: [{ value: '10K+', label: 'Downloads' }, { value: '3.9★', label: 'Play Store rating' }, { value: '1.19K', label: 'Reviews' }],
    links: [
      { label: 'Google Play', kind: 'play', href: 'https://play.google.com/store/apps/details?id=com.instaastro.astrologer' },
      { label: 'App Store', kind: 'apple', href: 'https://apps.apple.com/us/app/insta-astro-app-for-astrologer/id1582613403' },
      { label: 'All InstaAstro apps', kind: 'dev', href: 'https://play.google.com/store/apps/dev?id=4765592756065994382' },
    ],
    phone: 'astrologer',
    accent: '#b085ff',
  },
  {
    name: 'Edunext Teacher',
    kind: 'EdTech',
    period: '2021 – 2022',
    company: 'Edunext Technology',
    description: 'Teacher app for attendance, homework, timetables, leave and messaging with parents, used by schools across India.',
    features: ['Attendance', 'Homework', 'Timetable', 'Leave', 'Parent messaging'],
    stack: ['React Native', 'Shared component library', 'REST APIs'],
    stats: [{ value: '100K+', label: 'Downloads' }],
    links: [
      { label: 'Google Play', kind: 'play', href: 'https://play.google.com/store/apps/details?id=com.edunext.teacherApp' },
      { label: 'App Store', kind: 'apple', href: 'https://apps.apple.com/us/app/edunext-teacher/id6443792390' },
    ],
    phone: 'teacher',
    accent: '#4ea8ff',
  },
  {
    name: 'Edunext Parent',
    kind: 'School communication',
    period: '2021 – 2022',
    company: 'Edunext Technology',
    description: 'Parent app for attendance, fees, homework and school updates.',
    features: ['Fee payments', 'Attendance', 'Homework', 'School updates'],
    stack: ['React Native', 'REST APIs'],
    stats: [{ value: '4.3★', label: 'App Store rating' }, { value: '107', label: 'Ratings' }],
    links: [
      { label: 'Google Play', kind: 'play', href: 'https://play.google.com/store/search?q=edunext+parent&c=apps' },
      { label: 'App Store', kind: 'apple', href: 'https://apps.apple.com/us/app/edunext-parent/id1516241231' },
    ],
    phone: 'parent',
    accent: '#3fdc9a',
  },
]

const schoolApps = [
  { name: 'GD Goenka Jalandhar', href: 'https://play.google.com/store/apps/details?id=com.edunext.gdgjalandhar' },
  { name: 'My Wood School Manthan', href: 'https://play.google.com/store/apps/details?id=com.edunext.MyWoodSchoolmanthan' },
  { name: 'SKD Academy', href: 'https://play.google.com/store/apps/details?id=com.edunext.skdacademybeta' },
]

const experience = [
  {
    date: 'Nov 2025 – Present', role: 'Senior Software Engineer', company: 'Clover Infotech', location: 'Navi Mumbai',
    points: [
      "Built Bruno's Barbers end to end with React Native 0.82, React 19, TypeScript and RTK Query; live on Google Play and the App Store.",
      'Architected app structure and state management with Redux Toolkit and RTK Query, with API caching, error handling and loading states.',
      'Set up Dev/UAT/Prod Android flavors with Gradle, keystores and Play App Signing; QA/UAT builds via Fastlane and Firebase App Distribution.',
      'Integrated native modules (Kotlin/Java, Swift/Objective-C), deep linking, FCM push, Intercom, OTP authentication and SSL pinning.',
      'Lead and mentor junior developers through code reviews and TypeScript standards.',
    ],
  },
  {
    date: 'Jan 2023 – Nov 2025', role: 'Software Developer (React Native)', company: 'InstaAstro', location: 'Noida, UP',
    points: [
      'Developed and maintained 2 live apps on Android and iOS: the customer app (4.5★, 977 ratings) and the astrologer partner app (10K+ downloads).',
      'Owned the release cycle: signed AAB/IPA builds, versioning, TestFlight and Play internal testing, production releases.',
      'Improved performance by cutting unnecessary re-renders; fixed crashes to improve stability across devices and networks.',
    ],
  },
  {
    date: 'Jul 2021 – Oct 2022', role: 'Frontend Developer (React Native)', company: 'Edunext Technology', location: 'Noida, UP',
    points: [
      'Developed and published 5+ apps, including Edunext Teacher (100K+ downloads) and Edunext Parent (4.3★).',
      'Built a reusable React Native component library shared across 4+ white-label school apps.',
      'Automated build and deployment steps to shorten release time.',
    ],
  },
  {
    date: 'Apr 2020 – Oct 2020', role: 'Frontend Developer (React & React Native)', company: 'Devekraft Technology', location: 'Delhi',
    points: ['Built a responsive loan management dashboard with React.js and Redux, with eligibility, EMI and application APIs.'],
  },
  {
    date: 'Jan 2019 – Mar 2020', role: 'Frontend Developer (React & React Native)', company: '1101 Tech Corporation', location: 'Gurugram, HR',
    points: ['Developed an e-commerce web app with product listing, cart and checkout, and improved responsive UI.'],
  },
]

const release = [
  { icon: Play, title: 'Android', items: ['Signed AAB / APK builds', 'Keystores & Play App Signing', 'Dev / UAT / Prod Gradle flavors', 'Internal → production tracks'] },
  { icon: Apple, title: 'iOS', items: ['Certificates & provisioning', 'Bundle IDs & Xcode archives', 'TestFlight beta builds', 'App Store review submissions'] },
  { icon: Workflow, title: 'Release process', items: ['Fastlane & Firebase App Distribution', 'Versioning & build numbers', 'Store listings & data safety forms', 'Fixing review rejections'] },
]

const skills = [
  { title: 'Mobile', items: ['React Native 0.82', 'New Architecture', 'Android & iOS', 'Native modules (Kotlin/Java, Swift/Obj-C)', 'React Navigation', 'Deep linking'] },
  { title: 'Languages & UI', items: ['TypeScript', 'JavaScript (ES6+)', 'React.js / React 19', 'Hooks & Context API', 'Java, Python, HTML5, CSS3'] },
  { title: 'State & APIs', items: ['Redux Toolkit', 'RTK Query', 'REST APIs & Axios', 'Form validation', 'Caching & error handling'] },
  { title: 'Firebase & integrations', items: ['Firebase Cloud Messaging', 'Firebase App Distribution', 'Push notifications', 'Intercom', 'OTP auth', 'SSL pinning'] },
  { title: 'CI/CD & tools', items: ['Fastlane', 'Play Console', 'App Store Connect', 'Gradle, CMake, CocoaPods', 'Android Studio, Xcode, Git'] },
  { title: 'Practices', items: ['Mobile architecture', 'Performance optimization', 'Unit testing', 'Code review & mentoring', 'Agile / Scrum'] },
]

const marquee = ['React Native', 'TypeScript', 'React 19', 'Redux Toolkit', 'RTK Query', 'Firebase', 'FCM', 'Deep Linking', 'Fastlane', 'TestFlight', 'Play Console', 'App Store Connect', 'Kotlin', 'Swift', 'Gradle', 'Xcode', 'Intercom', 'SSL Pinning']

const certs = [
  { name: 'Frontend Developer (React)', issuer: 'HackerRank', date: 'Oct 2026', id: '091163A14ABD', href: 'https://www.hackerrank.com/certificates/091163a14abd' },
  { name: 'JavaScript (Basic)', issuer: 'HackerRank', date: 'Oct 2026', id: '0D492D080D94', href: 'https://www.hackerrank.com/certificates/0d492d080d94' },
]

function StoreButton({ link }: { link: StoreLink }) {
  const Icon = link.kind === 'apple' ? Apple : link.kind === 'play' ? Play : Store
  const sub = link.kind === 'apple' ? 'Download on the' : link.kind === 'play' ? 'Get it on' : 'Developer page'
  return (
    <a className={`store-btn ${link.kind}`} href={link.href} target="_blank" rel="noreferrer">
      <Icon size={20} />
      <span><small>{sub}</small><strong>{link.label}</strong></span>
    </a>
  )
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('.spot')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
}

function CountUp({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(to)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setVal(0)
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400)
        setVal(to * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{val.toFixed(decimals)}<em>{suffix}</em></span>
}

function CopyChip({ icon: Icon, label, value, href, copyValue, onLinkClick, extra }: {
  icon: typeof Mail; label: string; value: string; href: string; copyValue?: string
  onLinkClick?: () => void; extra?: { label: string; href: string }
}) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    if (await copyText(copyValue ?? value)) { setCopied(true); window.setTimeout(() => setCopied(false), 1600) }
  }
  return (
    <div className="contact-card spot">
      <div className="cc-icon"><Icon size={22} /></div>
      <small>{label}</small>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={onLinkClick}>{value}</a>
      <div className="cc-btns">
        <button onClick={copy} aria-label={`Copy ${label}`}>{copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}</button>
        {extra && <a className="cc-extra" href={extra.href} target="_blank" rel="noreferrer">{extra.label} <ArrowUpRight size={13} /></a>}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState('')
  const toastTimer = useRef<number | undefined>(undefined)
  useReveal()

  // On any email click: copy the address and show a toast, then let the mailto: link open the mail app.
  const onEmailClick = () => {
    copyText(EMAIL).then((ok) => {
      setToast(ok ? `Email copied: ${EMAIL}` : `Email: ${EMAIL}`)
      window.clearTimeout(toastTimer.current)
      toastTimer.current = window.setTimeout(() => setToast(''), 3200)
    })
  }
  useSpotlight()

  const nav = [['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['Certificates', '#certificates'], ['Contact', '#contact']]

  return (
    <div className="site">
      <div className="bg-grid" />
      <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="#home"><span className="brand-mark">SK</span><span className="brand-name">Santosh Kumar</span></a>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            {nav.map(([l, h]) => <a key={l} href={h} onClick={() => setMenuOpen(false)}>{l}</a>)}
            <a className="nav-cta" href={CV_URL} download><Download size={15} /> CV</a>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="pill"><span className="dot" /> Available for Senior React Native roles</div>
            <p className="hello">Hi, I'm <strong>Santosh Kumar</strong> 👋</p>
            <h1>I build mobile apps that <span className="grad">people actually use.</span></h1>
            <p className="lead">
              Senior React Native Engineer with <strong>7+ years</strong> of experience and <strong>9+ live apps</strong> on Google Play and the App Store,
              including one with <strong>100K+ downloads</strong>. From architecture to signed builds and store release, I own the whole journey.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#work">View my apps <ArrowDownRight size={18} /></a>
              <a className="btn btn-ghost" href={CV_URL} download><Download size={17} /> Download CV</a>
            </div>
            <div className="hero-contact">
              <a href={PHONE_LINK}><Phone size={15} /> {PHONE}</a>
              <a href={MAILTO} onClick={onEmailClick}><Mail size={15} /> {EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <span><MapPin size={15} /> Navi Mumbai, India</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="halo" />
            <PhoneMock variant="astro" className="hp hp-left" />
            <PhoneMock variant="teacher" className="hp hp-right" />
            <PhoneMock variant="barber" className="hp hp-center" />
            <div className="float f1"><Star size={16} /><span><strong>4.5★ rating</strong><small>977 App Store ratings</small></span></div>
            <div className="float f2"><Sparkles size={16} /><span><strong>100K+ downloads</strong><small>Edunext Teacher</small></span></div>
            <div className="float f3"><BadgeCheck size={16} /><span><strong>9+ live apps</strong><small>Android & iOS</small></span></div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}<i>✦</i></span>)}
          </div>
        </div>

        {/* STATS */}
        <section className="wrap stats reveal">
          <div className="stat"><strong><CountUp to={7} suffix="+" /></strong><span>Years of experience</span></div>
          <div className="stat"><strong><CountUp to={9} suffix="+" /></strong><span>Live store apps</span></div>
          <div className="stat"><strong><CountUp to={100} suffix="K+" /></strong><span>Downloads on one app</span></div>
          <div className="stat"><strong><CountUp to={4.5} decimals={1} suffix="★" /></strong><span>Top App Store rating</span></div>
        </section>

        {/* WORK */}
        <section className="wrap block" id="work">
          <div className="head reveal">
            <div><div className="kicker">01 · Selected work</div><h2>Apps I've built and <span className="grad">shipped to the stores</span></h2></div>
            <p>Every app here is live in production. Tap a store badge to download it.</p>
          </div>

          <div className="projects">
            {projects.map((p, i) => (
              <article className={`project spot reveal${i % 2 ? ' flip' : ''}${i === 0 ? ' featured' : ''}`} key={p.name} style={{ ['--accent' as string]: p.accent }}>
                <div className="project-text">
                  <div className="project-top">
                    <span className="project-kind">{p.kind}</span>
                    <span className="project-period">{p.period} · {p.company}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="pstats">{p.stats.map((s) => <div key={s.label}><strong>{s.value}</strong><small>{s.label}</small></div>)}</div>
                  <ul className="features">{p.features.map((f) => <li key={f}><Check size={14} /> {f}</li>)}</ul>
                  <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                  <div className="stores">{p.links.map((l) => <StoreButton key={l.href} link={l} />)}</div>
                </div>
                <div className="project-visual">
                  <div className="pv-glow" />
                  <PhoneMock variant={p.phone} />
                </div>
              </article>
            ))}

            <article className="project schools spot reveal">
              <div className="project-text">
                <div className="project-top"><span className="project-kind">White-label platform</span><span className="project-period">2021 – 2022 · Edunext Technology</span></div>
                <h3>School apps on the Edunext platform</h3>
                <p className="project-desc">Branded apps for individual schools, all built on one shared React Native component library that I created and reused across 4+ white-label apps.</p>
              </div>
              <div className="school-list">
                {schoolApps.map((s) => (
                  <a key={s.name} className="school" href={s.href} target="_blank" rel="noreferrer">
                    <span className="school-icon">{s.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                    <span><strong>{s.name}</strong><small><Play size={11} /> Google Play</small></span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="band" id="experience">
          <div className="wrap block">
            <div className="head reveal">
              <div><div className="kicker">02 · Experience</div><h2>7+ years, <span className="grad">5 companies</span></h2></div>
              <p>From React web apps to owning mobile products end to end.</p>
            </div>
            <div className="timeline">
              {experience.map((job, i) => (
                <article className="job reveal" key={job.company}>
                  <div className={`job-marker${i === 0 ? ' now' : ''}`}>{i === 0 ? <BriefcaseBusiness size={16} /> : <span />}</div>
                  <div className="job-card spot">
                    <div className="job-title">
                      <div><h3>{job.role}</h3><h4>{job.company}</h4></div>
                      <div className="job-meta"><span className="job-date">{job.date}</span><span className="job-loc"><MapPin size={13} /> {job.location}</span></div>
                    </div>
                    <ul>{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELEASE */}
        <section className="wrap block" id="releases">
          <div className="head reveal">
            <div><div className="kicker">03 · Build to store</div><h2>I don't just code it. <span className="grad">I ship it.</span></h2></div>
            <p>Signing, builds, beta testing and store review on both platforms.</p>
          </div>
          <div className="release-grid">
            {release.map((r) => (
              <article className="release spot reveal" key={r.title}>
                <div className="release-icon"><r.icon size={22} /></div>
                <h3>{r.title}</h3>
                <ul>{r.items.map((it) => <li key={it}><Check size={15} /> {it}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="pipeline reveal">
            {['Code review', 'Dev / UAT / Prod builds', 'Firebase App Distribution · TestFlight', 'Store review', 'Live 🚀'].map((s, i, a) => (
              <div className="pipe-step" key={s}><span>{s}</span>{i < a.length - 1 && <i />}</div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="band" id="skills">
          <div className="wrap block">
            <div className="head reveal">
              <div><div className="kicker">04 · Toolkit</div><h2>Skills &amp; <span className="grad">tools</span></h2></div>
              <p>What I use day to day to build, secure and ship mobile apps.</p>
            </div>
            <div className="skills">
              {skills.map((g) => (
                <article className="skill spot reveal" key={g.title}>
                  <h3>{g.title}</h3>
                  <div className="skill-items">{g.items.map((it) => <span key={it}>{it}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="soft reveal"><Users size={17} /> <span><strong>Beyond code:</strong> leadership, mentoring juniors, code reviews, communication and cross-functional teamwork in Agile sprints.</span></div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="wrap block" id="certificates">
          <div className="head reveal">
            <div><div className="kicker">05 · Credentials</div><h2>Certificates &amp; <span className="grad">education</span></h2></div>
            <p>Verified credentials. Click any certificate to verify it on HackerRank.</p>
          </div>
          <div className="certs">
            {certs.map((c) => (
              <a className="cert spot reveal" key={c.id} href={c.href} target="_blank" rel="noreferrer">
                <div className="cert-ribbon"><Award size={30} /></div>
                <div className="cert-body">
                  <small>{c.issuer} · Certified</small>
                  <h3>{c.name}</h3>
                  <div className="cert-meta"><span>Issued {c.date}</span><span>ID: {c.id}</span></div>
                </div>
                <span className="cert-verify"><ShieldCheck size={16} /> Verify <ArrowUpRight size={14} /></span>
              </a>
            ))}
            <div className="cert edu spot reveal">
              <div className="cert-ribbon"><GraduationCap size={30} /></div>
              <div className="cert-body">
                <small>Education</small>
                <h3>Master of Computer Applications (MCA)</h3>
                <div className="cert-meta"><span>National Institute of Technology (NIT) Agartala</span><span>2019</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="wrap block contact-wrap" id="contact">
          <div className="contact reveal">
            <div className="kicker">06 · Contact</div>
            <h2>Let's build your next <span className="grad">mobile app.</span></h2>
            <p>Open to Senior React Native and mobile engineering roles. Call, email, or message me on LinkedIn.</p>
            <div className="contact-grid">
              <CopyChip icon={Phone} label="Phone" value={PHONE} href={PHONE_LINK} />
              <CopyChip icon={Mail} label="Email" value={EMAIL} href={MAILTO} onLinkClick={onEmailClick} extra={{ label: 'Open Gmail', href: GMAIL_URL }} />
              <CopyChip icon={Linkedin} label="LinkedIn" value="in/santoshpatelnita" href={LINKEDIN} copyValue={LINKEDIN} />
              <CopyChip icon={Github} label="GitHub" value="github.com/santoshpatelnita" href={GITHUB} copyValue={GITHUB} />
            </div>
            <div className="actions center">
              <a className="btn btn-primary" href={GMAIL_URL} target="_blank" rel="noreferrer"><Mail size={17} /> Email me on Gmail</a>
              <a className="btn btn-ghost" href={MAILTO} onClick={onEmailClick}><Mail size={17} /> Mail app</a>
              <a className="btn btn-ghost" href={CV_URL} download><Download size={17} /> Download CV</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <div className="footer-brand"><span className="brand-mark">SK</span><span><strong>Santosh Kumar</strong><small>Senior React Native Developer · Android & iOS</small></span></div>
        <div className="footer-links">
          <a href={PHONE_LINK} aria-label="Phone"><Phone size={17} /></a>
          <a href={MAILTO} onClick={onEmailClick} aria-label="Email"><Mail size={17} /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} Santosh Kumar · <a href="#home">Back to top ↑</a></span>
      </footer>

      <div className={toast ? 'toast show' : 'toast'} role="status" aria-live="polite"><Check size={16} /> {toast}</div>
    </div>
  )
}

export default App
