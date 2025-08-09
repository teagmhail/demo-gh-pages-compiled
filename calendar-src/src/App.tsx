import React from 'react'

const festivals = [
  { name: 'Samhain', date: 'Nov 1' },
  { name: 'Imbolc', date: 'Feb 1' },
  { name: 'Bealtaine', date: 'May 1' },
  { name: 'Lughnasadh', date: 'Aug 1' },
]

export default function App() {
  return (
    <section className="card prose">
      <h1>Calendar (Vite build)</h1>
      <p>This React app was compiled with Vite and deployed to <code>/calendar/</code>. Your source code stays in <code>/calendar-src/</code> — not published to Pages.</p>
      <ul>
        {festivals.map(f => <li key={f.name}>{f.name} — {f.date}</li>)}
      </ul>
      <p><span className="badge">Tip</span> In a larger project, set up routes or render your seasonal wheel here.</p>
    </section>
  )
}
