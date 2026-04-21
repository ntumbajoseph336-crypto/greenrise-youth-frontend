import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <header className="topbar">
        <div className="container nav-wrapper">
          <NavLink to="/" className="brand">
            <img src="/images/logo.png" alt="Logo GreenRise Youth" />
            <span>GreenRise Youth</span>
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/evenements">Evenements</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <a className="btn btn-primary" href="/evenements#inscription">
            S'inscrire
          </a>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/evenements" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>GreenRise Youth</h4>
            <p>ONG en RDC pour l'assainissement, la sensibilisation et la gestion durable des dechets.</p>
          </div>
          <div>
            <h4>Liens rapides</h4>
            <p><a href="/">Accueil</a></p>
            <p><a href="/evenements">Evenements</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div>
            <h4>Réseaux sociaux</h4>
            <p><a href="https://whatsapp.com/channel/0029VbBnp65CnA7pbNvGtQ3j" target="_blank" rel="noreferrer">Chaîne WhatsApp</a></p>
            <p><a href="https://www.instagram.com/reel/DXXBmJ2CJ5u/?igsh=MTRmanBpbHl3OGM2eA==" target="_blank" rel="noreferrer">Instagram</a></p>
            <p><a href="https://www.tiktok.com/@greenrise.youth?_r=1&_d=f1a5de7mi5e825&sec_uid=MS4wLjABAAAAAfdu0e0nRpPfuB6O2G_x-dh_h-YhlV5QD-SdVfW9aOrreIgkHfiWCJ923MTdsGpC&share_author_id=7623052805343052821&sharer_language=fr&source=h5_m&u_code=f2jdk254ef6hfe&timestamp=1776621351&user_id=7623052805343052821&sec_user_id=MS4wLjABAAAAAfdu0e0nRpPfuB6O2G_x-dh_h-YhlV5QD-SdVfW9aOrreIgkHfiWCJ923MTdsGpC&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7628968913054205716&share_link_id=1b2d09df-739f-4071-987b-b83fcbb39675&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" target="_blank" rel="noreferrer">TikTok</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
