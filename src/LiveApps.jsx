import { useMemo, useState } from "react";
import { liveApps } from "./data";

function AppCard({ app }) {
  return (
    <a className="app-card" href={app.url} target="_blank" rel="noreferrer">
      <div className="app-card-icon" style={{ background: app.tile.color }}>{app.tile.label}</div>
      <h3>{app.name}</h3>
      <p>{app.desc}</p>
      <div className="app-card-foot">
        <span className="app-tech">{app.tech}</span>
        <span className="app-open">Open →</span>
      </div>
    </a>
  );
}

export default function LiveApps() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return liveApps;
    return liveApps.filter(
      (a) =>
        a.name.toLowerCase().includes(term) ||
        a.desc.toLowerCase().includes(term) ||
        a.tech.toLowerCase().includes(term)
    );
  }, [q]);

  const categories = useMemo(() => {
    const groups = {};
    for (const a of filtered) {
      (groups[a.category] ||= []).push(a);
    }
    return groups;
  }, [filtered]);

  return (
    <section className="block" id="live-apps">
      <h2>Live Apps</h2>
      <p className="live-intro">
        Small apps I've built that you can open and use right here — they run entirely in your
        browser, so nothing you enter is sent anywhere. More on the way.
      </p>

      <div className="live-search">
        <input
          type="text"
          placeholder="Search apps…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search apps"
        />
        <span className="live-count">{filtered.length} {filtered.length === 1 ? "app" : "apps"}</span>
      </div>

      {Object.keys(categories).length === 0 && (
        <p className="row-desc">No apps match “{q}”.</p>
      )}

      {Object.entries(categories).map(([cat, apps]) => (
        <div className="live-group" key={cat}>
          <h4 className="live-cat">{cat}</h4>
          <div className="app-grid">
            {apps.map((a) => (
              <AppCard app={a} key={a.name} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
