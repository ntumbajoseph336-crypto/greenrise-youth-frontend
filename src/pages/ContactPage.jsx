import { Reveal } from "../components/Reveal";
import {
  adhesionIntro,
  adhesionPrincipe,
  adhesionOffres,
  adhesionAvantages,
  adhesionTransparence
} from "../data/adhesion";

function SocialIcon({ type }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" };
  if (type === "facebook") {
    return (
      <svg {...common}>
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.5 3.5A11 11 0 0 0 3.8 17.8L3 21l3.3-.8A11 11 0 1 0 20.5 3.5zM12 20a9 9 0 0 1-4.6-1.2l-.3-.2-1.9.5.5-1.8-.2-.3A9 9 0 1 1 12 20zm5.1-6.6c-.3-.1-1.7-.8-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a7.3 7.3 0 0 1-2.1-1.3 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.4c.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4s-.7-1.7-.9-2.3c-.2-.6-.4-.5-.7-.5h-.6c-.2 0-.4.1-.6.3s-.8.8-.8 2 .8 2.3.9 2.5a10 10 0 0 0 3.7 3.7c.5.3 1 .5 1.4.7.6.2 1.1.2 1.5.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.4-.3z" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg {...common}>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.4 2.4 4.4 5.6v6zM5.3 7.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.1 20.4H3.5V9h3.6v11.4zM22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg {...common}>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        <path d="M17.5 6.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
      </svg>
    );
  }
  if (type === "tiktok") {
    // Icône simple (style TikTok) en mono-couleur
    return (
      <svg {...common}>
        <path d="M16.6 2c.3 2.2 1.6 3.6 3.4 4v3c-1.7.1-3.2-.5-4.4-1.5V16a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.3-1.2-.3a2.7 2.7 0 1 0 2.7 2.7V2h4.3z" />
      </svg>
    );
  }
  // email
  return (
    <svg {...common}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Kinshasa,+R%C3%A9publique+d%C3%A9mocratique+du+Congo&hl=fr&z=12&ie=UTF8&iwloc=&output=embed";

function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="page-hero__bg" style={{ backgroundImage: "url(/images/page-contact-banner.png)" }} />
        <div className="container page-hero__inner">
          <Reveal>
            <h1 className="page-hero__title">Contact & adhésion</h1>
            <p className="page-hero__lead">
              Échangez avec GreenRise Youth et découvrez comment rejoindre l’aventure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section page-spacing">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <h2 className="section-title">Contacts</h2>
              <p>Une question, une adhésion ou une proposition de collaboration ? Contactez-nous via les liens ci-dessous.</p>

              <div className="card" style={{ marginTop: ".9rem" }}>
                <h3 style={{ marginTop: 0 }}>Adresse</h3>
                <p style={{ margin: 0 }}>
                  Commune de Lemba, Quartier Mbanzalemba<br />
                  Avenue Maseki N°5<br />
                  Kinshasa, République démocratique du Congo
                </p>
                <div style={{ height: ".75rem" }} />
                <p style={{ margin: 0 }}><strong>Email</strong> : greenriseyouth@gmail.com</p>
                <p style={{ margin: 0 }}><strong>Téléphone / WhatsApp</strong> : (à compléter)</p>
              </div>

              <div className="social-grid">
                <a className="social-link" href="mailto:greenriseyouth@gmail.com" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="email" /></span>
                  <span className="social-text">
                    <strong>Email</strong>
                    <span>greenriseyouth@gmail.com</span>
                  </span>
                </a>

                <a className="social-link" href="https://www.instagram.com/reel/DXXBmJ2CJ5u/?igsh=MTRmanBpbHl3OGM2eA==" target="_blank" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="instagram" /></span>
                  <span className="social-text">
                    <strong>Instagram</strong>
                    <span>Compte officiel</span>
                  </span>
                </a>

                <a className="social-link" href="https://www.facebook.com/profile.php?id=61577548479117" target="_blank" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="facebook" /></span>
                  <span className="social-text">
                    <strong>Facebook</strong>
                    <span>Page officielle</span>
                  </span>
                </a>

                <a className="social-link" href="https://www.tiktok.com/@greenrise.youth?_r=1&_d=f1a5de7mi5e825&sec_uid=MS4wLjABAAAAAfdu0e0nRpPfuB6O2G_x-dh_h-YhlV5QD-SdVfW9aOrreIgkHfiWCJ923MTdsGpC&share_author_id=7623052805343052821&sharer_language=fr&source=h5_m&u_code=f2jdk254ef6hfe&timestamp=1776621351&user_id=7623052805343052821&sec_user_id=MS4wLjABAAAAAfdu0e0nRpPfuB6O2G_x-dh_h-YhlV5QD-SdVfW9aOrreIgkHfiWCJ923MTdsGpC&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7628968913054205716&share_link_id=1b2d09df-739f-4071-987b-b83fcbb39675&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" target="_blank" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="tiktok" /></span>
                  <span className="social-text">
                    <strong>TikTok</strong>
                    <span>@greenrise.youth</span>
                  </span>
                </a>

                <a className="social-link" href="https://whatsapp.com/channel/0029VbBnp65CnA7pbNvGtQ3j" target="_blank" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="whatsapp" /></span>
                  <span className="social-text">
                    <strong>WhatsApp</strong>
                    <span>Chaîne (annonces & actus)</span>
                  </span>
                </a>

                <a className="social-link" href="https://www.linkedin.com/company/greenrise-youth/" target="_blank" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="linkedin" /></span>
                  <span className="social-text">
                    <strong>LinkedIn</strong>
                    <span>Page GreenRise Youth</span>
                  </span>
                </a>

                <a className="social-link" href="https://www.linkedin.com/groups/17996014" target="_blank" rel="noreferrer">
                  <span className="social-ico"><SocialIcon type="linkedin" /></span>
                  <span className="social-text">
                    <strong>Groupe LinkedIn</strong>
                    <span>Communauté & échanges</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="adhesion-card adhesion-card--accent">
              <h2 className="adhesion-card__title">{adhesionIntro.titre}</h2>
              <p className="adhesion-card__subtitle">{adhesionIntro.sousTitre}</p>
              <p>{adhesionIntro.engagement}</p>
              <p>{adhesionIntro.disponibilite}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container adhesion-blocks">
          <Reveal>
            <article className="adhesion-block">
              <h2 className="section-title">{adhesionPrincipe.titre}</h2>
              <p className="adhesion-block__highlight">{adhesionPrincipe.texte}</p>
              <p>{adhesionPrincipe.etapesIntro}</p>
              <ol className="adhesion-steps">
                {adhesionPrincipe.etapes.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ol>
            </article>
          </Reveal>

          <Reveal delay={60}>
            <article className="adhesion-block">
              <h2 className="section-title">{adhesionOffres.titre}</h2>
              <p><strong>{adhesionOffres.formationsAutonomisation}</strong></p>
              <ul>
                {adhesionOffres.listeDames.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p><strong>{adhesionOffres.formationsGratuites}</strong></p>
              <ul>
                {adhesionOffres.listeGratuites.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <div className="adhesion-two-col">
            <Reveal delay={40}>
              <article className="adhesion-block adhesion-block--green">
                <h2 className="section-title">{adhesionAvantages.titre}</h2>
                <ul>
                  {adhesionAvantages.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="adhesion-block adhesion-block--blue">
                <h2 className="section-title">{adhesionTransparence.titre}</h2>
                <ul>
                  {adhesionTransparence.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="adhesion-block__footer">{adhesionTransparence.vision}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt-bg contact-map-section">
        <div className="container">
          <Reveal>
            <h2 className="contact-map-title">Notre zone d'intervention</h2>
            <p className="contact-map-lead">
              GreenRise Youth agit en République démocratique du Congo — base à Kinshasa.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="map-embed">
              <iframe
                title="Carte Google Maps — Kinshasa, RDC"
                src={MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
