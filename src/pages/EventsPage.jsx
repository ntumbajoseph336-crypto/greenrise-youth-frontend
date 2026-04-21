import { useEffect, useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import ImageCarousel from "../components/ImageCarousel";
import { ACTIVITIES_URL, REGISTER_URL, REPORTS_URL } from "../api/config";

async function parseJsonResponse(response) {
  const text = await response.text();
  if (!text || text.trim() === "") {
    return {
      message:
        `Reponse vide du serveur (HTTP ${response.status}). ` +
        `1) Lancez l'API : dans le dossier frontend, \"npm run php:api\" (ou backend/DEMARRER-API.bat). ` +
        `2) Testez dans le navigateur : http://127.0.0.1:8080/api/ping.php (doit afficher du JSON). ` +
        `3) MySQL doit etre demarre. URL appelée : ${REGISTER_URL}`
    };
  }
  try {
    return JSON.parse(text);
  } catch {
    return {
      message:
        "Le serveur n'a pas renvoye du JSON (souvent une erreur 404). " +
        "En dev : lancez \"npm run php:api\" ou double-cliquez sur backend/DEMARRER-API.bat. " +
        "Avec XAMPP : copiez backend vers htdocs/greenrise-api et mettez VITE_PROXY_APACHE=1 dans frontend/.env. " +
        "URL : " +
        REGISTER_URL
    };
  }
}

function EventsPage() {
  const [activities, setActivities] = useState([]);
  const [activitiesLoading, setActivitiesLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [reportsLoading, setReportsLoading] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventName: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    const loadActivities = async () => {
      try {
        const res = await fetch(ACTIVITIES_URL, { headers: { Accept: "application/json" } });
        const data = await parseJsonResponse(res);
        if (!res.ok) throw new Error(data.message || "Impossible de charger les activites.");
        const items = Array.isArray(data.items) ? data.items : [];
        if (active) {
          setActivities(items);
          setForm((prev) => ({
            ...prev,
            eventName: prev.eventName || (items[0]?.title ?? "")
          }));
        }
      } catch (err) {
        if (active) {
          setStatus({
            type: "error",
            message: err.message || "Impossible de charger les activites publiees."
          });
        }
      } finally {
        if (active) setActivitiesLoading(false);
      }
    };

    loadActivities();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    const loadReports = async () => {
      try {
        const res = await fetch(REPORTS_URL, { headers: { Accept: "application/json" } });
        const data = await parseJsonResponse(res);
        if (!res.ok) throw new Error(data.message || "Impossible de charger les rapports.");
        const items = Array.isArray(data.items) ? data.items : [];
        if (active) setReports(items);
      } catch (err) {
        if (active) {
          setReports([]);
          console.warn(err.message || err);
        }
      } finally {
        if (active) setReportsLoading(false);
      }
    };
    loadReports();
    return () => {
      active = false;
    };
  }, []);

  const fallbackActivities = useMemo(() => [
    { id: "f1", title: "Conference: Ville propre, jeunesse active", event_date: "2026-04-15", place: "Kinshasa - Gombe" },
    { id: "f2", title: "Atelier recyclage et entrepreneuriat vert", event_date: "2026-04-30", place: "Kinshasa - Limete" },
    { id: "f3", title: "Forum citoyen sur l'assainissement", event_date: "2026-05-12", place: "Kinshasa - Kintambo" }
  ], []);

  const visibleActivities = activities.length > 0 ? activities : fallbackActivities;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.eventName) {
      setStatus({ type: "error", message: "Aucun evenement publie disponible pour l'inscription." });
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await parseJsonResponse(response);

      if (!response.ok) {
        throw new Error(data.message || `Erreur HTTP ${response.status}`);
      }

      setStatus({ type: "success", message: data.message || "Inscription enregistree." });
      setForm((prev) => ({ ...prev, fullName: "", email: "", phone: "" }));
    } catch (error) {
      const msg =
        error instanceof TypeError && error.message === "Failed to fetch"
          ? "Impossible de joindre le serveur PHP. Lancez \"npm run php:api\" (port 8080) ou Apache avec htdocs/greenrise-api."
          : error.message;
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero page-hero--events">
        <div className="page-hero__bg" style={{ backgroundImage: "url(/images/page-events-banner.png)" }} />
        <div className="container page-hero__inner">
          <Reveal>
            <h1 className="page-hero__title">Événements & conférences</h1>
            <p className="page-hero__lead">
              Rencontres, ateliers et forums pour agir concrètement pour l'environnement en RDC. Inscrivez-vous
              en ligne.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section page-spacing">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Agenda</h2>
            <p>Participez à nos rencontres pour agir concrètement pour l'environnement en RDC.</p>
            {activitiesLoading ? <p className="muted">Chargement des activites publiees...</p> : null}
          </Reveal>

          <div className="events-panel">
            <div className="events-grid">
            {visibleActivities.map((conference, i) => (
              <Reveal key={conference.id ?? conference.title} delay={i * 70}>
                <article className="card events-card-pulse events-card--on-green">
                  <h3>{conference.title}</h3>
                  <p><strong>Date :</strong> {conference.event_date ?? conference.date}</p>
                  <p><strong>Lieu :</strong> {conference.place}</p>
                  {conference.description ? <p>{conference.description}</p> : null}
                </article>
              </Reveal>
            ))}
            </div>
          </div>

          <Reveal>
            <h2 className="section-title section-title--reports">Comptes rendus d&apos;activités réalisées</h2>
            <p className="section-intro">
              Après chaque action sur le terrain, retrouvez ici le récit, les photos et les vidéos publiés par
              l&apos;équipe GreenRise Youth.
            </p>
            {reportsLoading ? <p className="muted">Chargement des rapports...</p> : null}
          </Reveal>

          {!reportsLoading && reports.length === 0 ? (
            <Reveal>
              <p className="muted">Aucun rapport publié pour le moment.</p>
            </Reveal>
          ) : null}

          {reports.map((report, idx) => {
            const media = Array.isArray(report.media) ? report.media : [];
            const images = media.filter((m) => m.type === "image");
            const videos = media.filter((m) => m.type === "video");
            const carouselItems = images.slice(0, 12).map((m, i) => ({
              src: m.url,
              alt: `${report.title} — visuel ${i + 1}`
            }));
            return (
              <Reveal key={report.id} delay={idx * 50}>
                <article className="report-block card">
                  <h3 className="report-block__title">{report.title}</h3>
                  {report.activity_title ? (
                    <p className="report-block__linked muted">
                      Activité liée : <strong>{report.activity_title}</strong>
                    </p>
                  ) : null}
                  <div className="report-block__body">
                    {String(report.description || "")
                      .split("\n")
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                  </div>
                  {carouselItems.length > 0 ? (
                    <div className="report-block__carousel">
                      <ImageCarousel items={carouselItems} intervalMs={3200} />
                    </div>
                  ) : null}
                  {images.length > 0 ? (
                    <div className="gallery-masonry gallery-masonry--report">
                      {images.map((m) => (
                        <figure key={m.id} className="gallery-item">
                          <div className="gallery-item__img-wrap">
                            <img src={m.url} alt="" loading="lazy" decoding="async" />
                          </div>
                        </figure>
                      ))}
                    </div>
                  ) : null}
                  {videos.length > 0 ? (
                    <div className="report-videos">
                      {videos.map((m) => (
                        <video key={m.id} className="report-videos__clip" src={m.url} controls playsInline />
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}

          <Reveal>
            <div id="inscription" className="form-wrapper form-wrapper--events">
              <h2>Inscription à un événement</h2>
              <form className="register-form" onSubmit={handleSubmit}>
                <label>
                  Nom complet
                  <input name="fullName" value={form.fullName} onChange={handleChange} required />
                </label>

                <label>
                  Email
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>

                <label>
                  Téléphone
                  <input name="phone" value={form.phone} onChange={handleChange} required />
                </label>

                <label>
                  Événement
                  <select name="eventName" value={form.eventName} onChange={handleChange}>
                    {visibleActivities.map((conference) => (
                      <option key={conference.id ?? conference.title} value={conference.title}>{conference.title}</option>
                    ))}
                  </select>
                </label>

                <button className="btn btn-primary" type="submit" disabled={loading || !form.eventName}>
                  {loading ? "Envoi..." : "Valider l'inscription"}
                </button>
              </form>

              {status.message ? (
                <p className={status.type === "success" ? "message success" : "message error"}>{status.message}</p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
