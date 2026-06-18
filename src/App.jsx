import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  KeyRound,
  Layers,
  LockKeyhole,
  PlayCircle,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react'
import heroImage from './assets/social.png'
import logoImage from './assets/logo.png'

const links = {
  youtube: 'https://www.youtube.com/@JPostmanApi',
  wiki: 'https://github.com/JPostman/jpostman/wiki',
  slides: 'https://onedrive.live.com/?id=%2Fpersonal%2F5259373e58768a70%2FDocuments%2FJPostman',
  github: 'https://github.com/JPostman/jpostman',
  docs: 'https://jpostman.github.io/jpostman/',
}

const tutorials = [
  {
    part: '01',
    title: 'Setup Java Maven API Testing Project',
    topic: 'Create a Java Maven project and load exported Postman collections.',
    video: 'https://www.youtube.com/watch?v=UxFjeONEq60',
    wiki: 'https://github.com/JPostman/jpostman/wiki/JPostman-Tutorial-Part-1:-JPostman-Setup-and-create-a-Java-Maven-API-Testing-Project',
    slides: 'https://1drv.ms/p/c/5259373e58768a70/IQBf5CFqYEwySJfcJbSKaQA0ATgineTi9MiFFXjOfWITbOg?e=y8Z3UR&action=embedview',
  },
  {
    part: '02',
    title: 'Execute REST API with RestAssured',
    topic: 'Run Postman requests from Java using the RestAssured executor.',
    video: 'https://www.youtube.com/watch?v=hwsDjBSxIRs',
    wiki: 'https://github.com/JPostman/jpostman/wiki/JPostman-Tutorial-Part-2:-Execute-REST-API-Requests-with-RestAssured',
    slides: 'https://1drv.ms/p/c/5259373e58768a70/IQDNDuwgyIG4QL6xFwdlDiTtAe9E2t8u__9w3NE9aX1jucY?e=9MufWt&action=embedview',
  },
  {
    part: '03',
    title: 'Access Token and Chained Requests',
    topic: 'Extract tokens and pass values between related API requests.',
    video: 'https://www.youtube.com/watch?v=u3Z9yjglmTs',
    wiki: 'https://github.com/JPostman/jpostman/wiki/JPostman-Tutorial-Part-3:-Access-Token-and-Chained-Requests',
    slides: 'https://1drv.ms/p/c/5259373e58768a70/IQBfAWSPC9jfQYb3wIx0XtnoAXj58-BSONF85hkRnjJHTY4?e=tv0Plp&action=embedview',
  },
  {
    part: '04',
    title: 'Secure API Logs',
    topic: 'Mask sensitive request and response data with jpostman-secure.',
    video: 'https://www.youtube.com/watch?v=zOci7u021oU',
    wiki: 'https://github.com/JPostman/jpostman/wiki/JPostman-Tutorial-Part-4:-Secure-API-Logs-with-jpostman-secure',
    slides: 'https://1drv.ms/p/c/5259373e58768a70/IQDXjHHTJE2oTZkJtXWhlDKvAfqyApU4MlNrgFnmeDvoBQ4?e=GOGFnI&action=embedview',
  },
  {
    part: '05',
    title: 'TestNG Support and Fluent API Testing',
    topic: 'Use native TestNG support, assertions, verification, and caching.',
    video: 'https://www.youtube.com/watch?v=rbxJQR_i-9o',
    wiki: 'https://github.com/JPostman/jpostman/wiki/JPostman-Tutorial-Part-5:-TestNG-Support-and-Fluent-API-Testing',
    slides: 'https://1drv.ms/p/c/5259373e58768a70/IQDEGTKpZKASSqhhlog0u5ODAf31xWOo-7wOLmZkN-jn6A4?e=pbjZlW&action=embedview',
  },
  {
    part: '06',
    title: 'Fluent API with TestNG and JUnit',
    topic: 'Write cleaner cross-framework tests with native TestNG and JUnit modules.',
    video: links.youtube,
    wiki: 'https://github.com/JPostman/jpostman/wiki/JPostman-Tutorial-Part-6:-Fluent-API-with-TestNG-and-JUnit',
    slides: 'https://1drv.ms/p/c/5259373e58768a70/IQCYnGMtgO6_Q5F8BzMll2SoATrH5QkPv9F4P5TizX7TeDg?e=FtmQ6u&action=embedview',
  },
]

const modules = [
  ['jpostman-core', 'Load and resolve exported Postman collections and environments'],
  ['jpostman-secure', 'Mask secrets and protect request and response logs'],
  ['jpostman-testng', 'Native TestNG context, assertions, verification, and cache helpers'],
  ['jpostman-junit', 'Native JUnit 5 context, assertions, verification, and failure printing'],
  ['jpostman-restassured', 'REST Assured executor adapter'],
  ['jpostman-httpclient', 'Java HttpClient executor adapter'],
  ['jpostman-playwright', 'Playwright executor adapter'],
  ['jpostman-unirest', 'Unirest executor adapter'],
  ['jpostman-vault', 'Load environment values and secrets from Vault'],
  ['jpostman-github', 'Use GitHub variables and secrets'],
  ['jpostman-kubernetes', 'Load Kubernetes Secrets and ConfigMaps'],
]

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyJPostman />
        <Tutorials />
        <Modules />
        <CodePreview />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="JPostman home">
        <img className="brand-logo" src={logoImage} alt="JPostman logo" />
        <span>JPostman</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#modules">Modules</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <a className="nav-cta" href={links.youtube} target="_blank" rel="noreferrer">
        <PlayCircle size={18} /> Watch tutorials
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero section-grid">
      <div className="hero-copy">
        <div className="eyebrow"><ShieldCheck size={18} /> Java REST API Testing Library</div>
        <h1>Cleaner Java API tests with no hardcoded REST API details.</h1>
        <p className="hero-lede">
          JPostman helps you reuse exported Postman collections and environments directly in Java tests, so your test methods stay focused on the test flow instead of URLs, headers, and request bodies.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={links.github} target="_blank" rel="noreferrer">
            <Code2 size={20} /> View on GitHub
          </a>
          <a className="button secondary" href={links.wiki} target="_blank" rel="noreferrer">
            <BookOpen size={20} /> Open Wiki
          </a>
        </div>
        <div className="quick-points" aria-label="Highlights">
          <span><CheckCircle2 /> No hardcoded URLs</span>
          <span><CheckCircle2 /> No hardcoded headers</span>
          <span><CheckCircle2 /> No hardcoded bodies</span>
        </div>
      </div>
      <div className="hero-card" aria-label="JPostman preview image">
        <img src={heroImage} alt="JPostman Java REST API Testing Library" />
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Resource links">
      <a href={links.youtube} target="_blank" rel="noreferrer"><PlayCircle /> YouTube Channel</a>
      <a href={links.github} target="_blank" rel="noreferrer"><Code2 /> GitHub Repository</a>
      <a href={links.wiki} target="_blank" rel="noreferrer"><BookOpen /> GitHub Wiki</a>
      <a href={links.slides} target="_blank" rel="noreferrer"><Layers /> Slides Folder</a>
    </section>
  )
}

function WhyJPostman() {
  const cards = [
    {
      icon: <Code2 />,
      title: 'Fluent API design',
      text: 'Build readable test flows using method chaining, native assertions, response verification, and cache helpers.',
    },
    {
      icon: <Boxes />,
      title: 'Executor flexibility',
      text: 'Keep test methods stable while switching executor adapters such as RestAssured, Java HttpClient, Playwright, and Unirest.',
    },
    {
      icon: <Database />,
      title: 'Environment sources',
      text: 'Load values from exported Postman environments, Vault, GitHub, Kubernetes Secrets, and ConfigMaps.',
    },
    {
      icon: <LockKeyhole />,
      title: 'Secure logs',
      text: 'Protect request and response output with redaction rules, header filtering, policy profiles, and secure failure logs.',
    },
  ]

  return (
    <section id="features" className="content-section">
      <div className="section-heading">
        <span className="eyebrow">Why JPostman</span>
        <h2>Impressive test code without repetitive REST API plumbing.</h2>
        <p>
          Keep REST API information in your Postman assets and environment providers. Keep Java test methods clean, expressive, and reusable.
        </p>
      </div>
      <div className="feature-grid">
        {cards.map((card) => (
          <article className="feature-card" key={card.title}>
            <div className="icon-pill">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Tutorials() {
  return (
    <section id="tutorials" className="content-section alt">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">Tutorial series</span>
          <h2>Learn JPostman step by step.</h2>
        </div>
        <a className="text-link" href={links.youtube} target="_blank" rel="noreferrer">
          Open YouTube channel <ExternalLink size={16} />
        </a>
      </div>
      <div className="tutorial-grid">
        {tutorials.map((item) => (
          <article className="tutorial-card" key={item.part}>
            <div className="part-badge">Part {item.part}</div>
            <h3>{item.title}</h3>
            <p>{item.topic}</p>
            <div className="card-links">
              <a href={item.video} target="_blank" rel="noreferrer"><PlayCircle size={16} /> Video</a>
              <a href={item.wiki} target="_blank" rel="noreferrer"><BookOpen size={16} /> Wiki</a>
              <a href={item.slides} target="_blank" rel="noreferrer"><Layers size={16} /> Slides</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Modules() {
  return (
    <section id="modules" className="content-section">
      <div className="section-heading">
        <span className="eyebrow">Maven modules</span>
        <h2>Use only the modules your tests need.</h2>
      </div>
      <div className="module-table" role="table" aria-label="JPostman Maven modules">
        {modules.map(([name, description]) => (
          <div className="module-row" role="row" key={name}>
            <code>{name}</code>
            <span>{description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function CodePreview() {
  return (
    <section className="code-section">
      <div className="code-copy">
        <span className="eyebrow"><TerminalSquare size={18} /> Example idea</span>
        <h2>Test methods stay focused on behavior.</h2>
        <p>
          URLs, headers, auth, and request bodies can come from Postman collections, environments, and external secret providers instead of being hardcoded in every test.
        </p>
      </div>
      <pre className="code-window"><code>{`base.request(col.getRequest("Get current auth user"))
    .response(c -> RestAssuredExecutor.apply(c.request())
        .auth().oauth2(getTokens("user1")))
    .context(c -> {
        c.soft(true).statusCode(200);
        c.response().print();
    });`}</code></pre>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta">
      <h2>Build cleaner API automation with JPostman.</h2>
      <p>Open source, MIT licensed, and built for Java developers who want reusable API test code.</p>
      <div className="hero-actions center-actions">
        <a className="button primary" href={links.github} target="_blank" rel="noreferrer">
          <Code2 size={20} /> Star the repository
        </a>
        <a className="button secondary" href={links.slides} target="_blank" rel="noreferrer">
          <Layers size={20} /> View slides
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>JPostman</strong>
        <p>Java REST API Testing Library</p>
      </div>
      <div className="footer-links">
        <a href={links.youtube} target="_blank" rel="noreferrer">YouTube</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={links.wiki} target="_blank" rel="noreferrer">Wiki</a>
        <a href={links.docs} target="_blank" rel="noreferrer">Docs</a>
      </div>
    </footer>
  )
}

export default App
