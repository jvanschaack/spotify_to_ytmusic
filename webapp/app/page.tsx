const actions = [
  {
    title: "Connect YouTube Music",
    description: "Upload or generate OAuth credentials for YT Music.",
    cta: "Connect",
  },
  {
    title: "Backup Spotify",
    description: "Authorize Spotify and save playlists + liked songs.",
    cta: "Start Backup",
  },
  {
    title: "Load Liked Songs",
    description: "Match liked songs and add them on YT Music.",
    cta: "Load Liked",
  },
  {
    title: "Copy Playlists",
    description: "Move selected or all playlists to YT Music.",
    cta: "Copy",
  },
];

const statusItems = [
  { label: "YT Music OAuth", value: "Not Connected" },
  { label: "Spotify Backup", value: "No file uploaded" },
  { label: "Active Job", value: "Idle" },
];

export default function HomePage() {
  return (
    <main>
      <section id="overview" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Vercel-ready SPA</span>
            <h1>Move Spotify playlists to YouTube Music, faster.</h1>
            <p className="lead">
              This web dashboard orchestrates the migration flow and calls a Python
              backend for Spotify backups and YT Music matching.
            </p>
            <div className="hero-actions">
              <button className="primary">Connect YT Music</button>
              <button className="ghost">View API Docs</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>Next steps</h3>
            <ol>
              <li>Set your backend URL in the environment.</li>
              <li>Authenticate Spotify and YT Music.</li>
              <li>Run playlist migration jobs.</li>
            </ol>
            <div className="notice">
              This UI expects a companion Python API service.
            </div>
          </div>
        </div>
      </section>

      <section id="actions" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Actions</h2>
            <p>Kick off each step in the migration flow.</p>
          </div>
          <div className="grid">
            {actions.map((action) => (
              <article key={action.title} className="card">
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <button>{action.cta}</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="status" className="section alt">
        <div className="container">
          <div className="section-header">
            <h2>Migration status</h2>
            <p>Keep track of credentials, backups, and running jobs.</p>
          </div>
          <div className="status">
            {statusItems.map((item) => (
              <div key={item.label} className="status-item">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="log">
            <h3>Live logs</h3>
            <pre>
              {`[12:01] Ready to connect to backend\n[12:02] Awaiting OAuth tokens\n[12:05] No jobs running`}
            </pre>
          </div>
        </div>
      </section>

      <section id="settings" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Settings</h2>
            <p>Configure matching algorithms and backend endpoints.</p>
          </div>
          <form className="settings">
            <label>
              Backend URL
              <input
                type="url"
                placeholder="https://your-python-api.example.com"
              />
            </label>
            <label>
              Matching Algorithm
              <select>
                <option>Exact match</option>
                <option>Fuzzy match</option>
                <option>Fuzzy + video fallback</option>
              </select>
            </label>
            <label>
              Track sleep (seconds)
              <input type="number" min="0" step="0.1" defaultValue="0.1" />
            </label>
            <button className="primary" type="submit">
              Save settings
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
