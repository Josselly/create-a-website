import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, LinkedIn, Plus, XMark } from './icons.jsx'
import './Hero.css'

const cards = [
  {
    value: '30+',
    unit: 'services',
    body: 'We know the full cycle from positioning to advertising.',
  },
  {
    value: '120+',
    unit: 'projects',
    body: 'Collaborating with clients across 10+ countries.',
  },
]

const faces = [
  { a: '#f0a882', b: '#c26a4a' },
  { a: '#b9a7ee', b: '#7048c8' },
  { a: '#8fd0e0', b: '#3f8ba0' },
]

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Some browsers block autoplay until the element is explicitly nudged.
    const play = video.play()
    if (play?.catch) play.catch(() => {})

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setReady(true)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__media">
        <video
          ref={videoRef}
          className={`hero__video ${ready ? 'is-ready' : ''}`}
          src={`${import.meta.env.BASE_URL}hero-loop.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__body">
        <div className="hero__left">
          <div className="hero__head">
            <h1 className="hero__title">
              Digital that<br />moves deeper <span className="hero__plus" aria-hidden="true">+</span>
            </h1>
            <p className="hero__kicker">From idea<br />to launch</p>
          </div>

          <div className="hero__act">
            <a className="btn btn--outline hero__consult" href="#main">
              Get a free consultation
              <span className="hero__consult-dot" aria-hidden="true"><ArrowUpRight /></span>
            </a>
            <p className="hero__act-note">
              Leave a request right now<br />and get a free 30-minute<br />consultation.
            </p>
          </div>

          <div className="hero__row">
            <ul className="hero__cards">
              {cards.map((card) => (
                <li key={card.unit} className="card">
                  <p className="card__value">
                    {card.value}
                    <span className="card__unit">{card.unit}</span>
                  </p>
                  <p className="card__body">{card.body}</p>
                </li>
              ))}
            </ul>

            <div className="hero__social">
              <div className="hero__social-btns">
                <a href="#main" aria-label="LinkedIn"><LinkedIn /></a>
                <a href="#main" aria-label="X"><XMark /></a>
              </div>
              <span>Social<br />media</span>
            </div>
          </div>
        </div>

        <aside className="hero__rail">
          <p className="rail__intro">
            No noise, no templates — just thoughtful strategy,
            aesthetic precision, and a team that delivers.
          </p>

          <img className="rail__thumb" src={`${import.meta.env.BASE_URL}rail-thumb.jpg`} alt="" width="340" height="275" />

          <div className="rail__budget">
            <p className="rail__budget-value">$250K+</p>
            <p className="rail__budget-label">ad budget</p>
          </div>

          <div className="rail__proof">
            <p>We know how to get leads without blowing your budget</p>
            <div className="rail__faces" aria-hidden="true">
              {faces.map((face, i) => (
                <i key={i} style={{ '--a': face.a, '--b': face.b }} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__statement">
        <p className="hero__eyebrow">
          <Plus className="hero__eyebrow-plus" />
          Who we are and<br />why clients trust us
        </p>
        <p className="hero__claim">
          We’re a <em>full-cycle</em> digital agency that dives deep into your
          business and <em>works as a partner</em>, not just a provider.
        </p>
      </div>
    </section>
  )
}
