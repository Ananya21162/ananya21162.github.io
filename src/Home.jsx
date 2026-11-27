import { Link } from "react-router-dom";
import { profile, workProjects, timeline, projects } from "./data";

function Bio() {
  return (
    <section className="block" id="bio">
      <h2>Bio</h2>
      <p>
        I'm a software engineer building AI-powered products and the platforms behind them. At{" "}
        <a href="https://www.cornerstoneondemand.com/" target="_blank" rel="noreferrer">Cornerstone</a> I
        built Cornerstone Coach, the company's first Slack app, and worked across the stack on the{" "}
        <a href="https://www.cornerstoneondemand.com/readiness-agents/" target="_blank" rel="noreferrer">Proactive Coach readiness agent</a>,
        now live for customers. At{" "}
        <a href="https://www.oracle.com/artificial-intelligence/" target="_blank" rel="noreferrer">Oracle</a> I
        built conversational-AI and text-to-speech services on OCI, including a technique for
        extending TTS training data that became a{" "}
        <a href="https://publish.innography.com/d75a83e2cd2667012b5571f8f3239cb2/patent/20260221130" target="_blank" rel="noreferrer">US patent application</a>.
      </p>
      <p>
        Before this, I completed my master's in machine learning at IIIT Delhi, where my{" "}
        <a href="https://repository.iiitd.edu.in/jspui/handle/123456789/1371" target="_blank" rel="noreferrer">thesis</a>{" "}
        built an automated species-segregation tool for the Wildlife Institute of India's tiger
        estimation. In my own time I build small apps, some of which you can try on the{" "}
        <Link to="/live-apps">Live Apps</Link> page.
      </p>
      <p>
        For more details about my background, refer to my{" "}
        <a href={profile.links.resume} target="_blank" rel="noreferrer">Resume / CV</a>. I'm always happy to talk
        about building AI agents and the products around them, from LLM integrations and Slack
        apps to model serving. If you're working on something similar or want to collaborate, reach
        out via{" "}
        <a href={`mailto:${profile.links.email}`}>Email</a> or{" "}
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>!
      </p>
      <p className="updated">Last Updated: November 2026</p>
    </section>
  );
}

function WorkProjects() {
  return (
    <section className="block" id="work-projects">
      <h2>Projects I've worked on</h2>
      {workProjects.map((p) => (
        <div className="row" key={p.name}>
          <div className="row-body">
            <div className="row-head">
              <h3>
                {p.url ? <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a> : p.name}{" "}
                <span className="at">· {p.orgUrl ? <a href={p.orgUrl} target="_blank" rel="noreferrer">{p.org}</a> : p.org}</span>
              </h3>
            </div>
            <p className="row-desc">{p.desc}</p>
            <div className="chips">
              {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Timeline() {
  return (
    <section className="block" id="timeline">
      <h2>Timeline</h2>
      <div className="timeline">
        {timeline.map((t) => (
          <div className="tl-item" key={t.org}>
            {t.logo ? <img className="tl-logo" src={t.logo} alt="" /> : <div className="tl-logo" />}
            <div className="tl-org">{t.url ? <a href={t.url} target="_blank" rel="noreferrer">{t.org}</a> : t.org}</div>
            <div className="tl-period">{t.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="block" id="projects">
      <h2>Selected Course Projects</h2>
      {projects.map((p) => (
        <a className="row link-row" href={p.url} target="_blank" rel="noreferrer" key={p.name}>
          <div className="row-body">
            <div className="row-head">
              <h3>{p.name} <span className="at">· {p.lang}</span></h3>
            </div>
            <p className="row-desc">{p.desc}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Bio />
      <WorkProjects />
      <Projects />
      <Timeline />
    </>
  );
}
