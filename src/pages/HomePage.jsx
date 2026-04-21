import { Reveal } from "../components/Reveal";
import ImageCarousel from "../components/ImageCarousel";
import { galleryItems } from "../data/gallery";

const heroSlides = [
  {
    src: "/images/hero-mobilisation.png",
    alt: "Jeunes mobilises pour l'environnement en RDC",
    caption: "Assainissement et mobilisation de la jeunesse",
    type: "framed"
  },
  {
    src: "/images/logo.png",
    alt: "Logo GreenRise Youth",
    caption: "GreenRise Youth",
    type: "logo"
  }
];

const objectifsList = [
  "Sensibiliser les jeunes et les communautés aux enjeux environnementaux.",
  "Promouvoir la culture écologique et la participation citoyenne.",
  "Encourager la recherche et l’innovation environnementale.",
  "Mettre en œuvre des actions concrètes : reboisement, gestion des déchets, protection de la biodiversité, accès à l’eau et à l’énergie durable.",
  "Renforcer le leadership des femmes dans les initiatives environnementales."
];

const stats = [
  { target: 5, suffix: "+", label: "Programmes environnementaux" },
  { target: 300, suffix: "+", label: "Jeunes sensibilises" },
  { target: 25, suffix: "", label: "Actions de nettoyage" },
  { target: 10, suffix: "", label: "Partenariats communautaires" }
];

const activities = [
  {
    title: "Campagnes de sensibilisation",
    description:
      "Mobilisation, messages de prévention et actions éducatives pour des comportements responsables.",
    icon: "📢"
  },
  {
    title: "Formations et ateliers",
    description:
      "Sessions pratiques et ateliers pour renforcer les compétences et l’engagement écologique.",
    icon: "🎓"
  },
  {
    title: "Projets environnementaux sur le terrain",
    description:
      "Actions concrètes dans les quartiers : assainissement, reboisement et protection des écosystèmes.",
    icon: "🌿"
  },
  {
    title: "Recherche et innovation",
    description:
      "Idées, solutions locales et approches innovantes pour améliorer l’impact environnemental.",
    icon: "💡"
  },
  {
    title: "Partenariats",
    description:
      "Collaborations avec institutions, organisations et communautés pour amplifier les résultats.",
    icon: "🤝"
  }
];

function HomePage() {
  return (
    <>
      {/* Hero dynamique */}
      <section className="hero hero--visual">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__shapes" aria-hidden="true">
          <span className="hero__blob hero__blob--1" />
          <span className="hero__blob hero__blob--2" />
        </div>
        <div className="container hero-grid hero-grid--enhanced">
          <Reveal>
            <div className="hero__content">
              <p className="kicker">ONG environnementale en RDC</p>
              <h1>GreenRise Youth — Nature needs us. We rise.</h1>
              <p className="hero__lead">
                GreenRise Youth est une organisation non gouvernementale engagée dans la protection de
                l’environnement, la lutte contre le changement climatique et la promotion du développement durable.
              </p>
              <p className="hero__lead">
                Nous croyons au pouvoir de la jeunesse pour transformer le monde. À travers nos actions, nous
                sensibilisons, formons et accompagnons les communautés vers une gestion responsable des ressources
                naturelles.
              </p>
              <div className="cta-group">
                <a className="btn btn-primary" href="/evenements#inscription">
                  Rejoindre un évènement
                </a>
                <a className="btn btn-outline" href="/contact">
                  Nous contacter
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="hero-card hero-card--hero-img">
              <div className="hero-card__frame">
                <ImageCarousel items={heroSlides} intervalMs={4200} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact — statistiques */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Notre impact</h2>
            <p className="section-intro">Des chiffres qui reflètent l'engagement de nos jeunes et de nos communautés.</p>
          </Reveal>
          <div className="stats-grid stats-grid--animated">
            {stats.map((item) => (
              <Reveal key={item.label} delay={80}>
                <article className="card stat-card stat-card--glass">
                  <strong className="stat-card__num">
                    {item.target}
                    {item.suffix}
                  </strong>
                  <span>{item.label}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <div>
              <h2 className="section-title">À propos — Qui sommes-nous ?</h2>
              <p>
                GreenRise Youth est une organisation à but non lucratif fondée par <strong>Espérance Kandjale
                Yolima</strong> et <strong>Roger Kalonga Kalonga</strong>. Elle œuvre dans les domaines de
                l’environnement, de l’éducation citoyenne et du développement durable.
              </p>
              <p>
                <strong>Notre mission</strong> : contribuer à la protection de l’environnement et renforcer
                l’engagement des jeunes dans la gestion durable des ressources naturelles.
              </p>
              <p>
                <strong>Notre vision</strong> : un monde où les jeunes sont des acteurs clés du changement
                environnemental et du développement durable.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="about-visual">
              <img src="/images/qui-sommes-nous.png" alt="Présentation de GreenRise Youth" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nos objectifs */}
      <section className="section objectifs-section">
        <div className="objectifs-section__decor" style={{ backgroundImage: "url(/images/section-nature-bg.png)" }} aria-hidden="true" />
        <div className="container">
          <Reveal>
            <h2 className="section-title section-title--light">Nos objectifs</h2>
            <p className="section-intro section-intro--light">Nos objectifs guident chacune de nos actions.</p>
          </Reveal>

          <Reveal>
            <div className="card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.18)", color: "#fff" }}>
              <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                {objectifsList.map((x) => (
                  <li key={x} style={{ marginBottom: ".55rem" }}>{x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Activités */}
      <section className="section alt-bg">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Nos activités</h2>
          </Reveal>
          <div className="activities-grid">
            {activities.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="card activity-card activity-card--lift">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nous rejoindre */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Nous rejoindre</h2>
            <p className="section-intro">Vous souhaitez vous engager pour l’environnement ? Rejoignez GreenRise Youth !</p>
          </Reveal>
          <Reveal>
            <div className="card">
              <ul className="about-list">
                <li>Devenir membre</li>
                <li>Participer à nos activités</li>
                <li>Collaborer en tant que partenaire</li>
                <li>Soutenir nos actions</li>
              </ul>
              <p style={{ margin: 0 }}><strong>Ensemble, faisons la différence.</strong></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Galerie */}
      <section className="section gallery-section alt-bg">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Galerie</h2>
            <p className="section-intro">
              Nature, environnement et assainissement : visuels inspirants pour illustrer notre mission.
              <span className="gallery-credit"> Photos Unsplash (libres de droits).</span>
            </p>
          </Reveal>
          <Reveal>
            <ImageCarousel items={galleryItems.slice(0, 6)} intervalMs={3800} />
          </Reveal>
          <div className="gallery-masonry">
            {galleryItems.map((item, i) => (
              <Reveal key={item.src} delay={(i % 3) * 50}>
                <figure className={`gallery-item ${i % 5 === 0 ? "gallery-item--tall" : ""}`}>
                  <div className="gallery-item__img-wrap">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="gallery-item__cap">{item.caption}</figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
