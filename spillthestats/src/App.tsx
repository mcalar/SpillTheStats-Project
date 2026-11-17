import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { AccessibilityPanel, type PanelState } from "./components/AccessibilityPanel";
import { BionicText } from "./components/BionicText";
import { UiIcon } from "./components/UiIcon";
import { useBionicText } from "./hooks/useBionicText";
import './styles/marquee.css';
import heroPoros from './assets/poros-playing.webp';
import heroTristana from './assets/poster-dragontrainer-tristana.jpg';
import logoMistDarkblue from './assets/logo-mist-darkblue.png';
import logoDarkblueMist from './assets/logo-darkblue-mist.png';
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage"; // Import the LoginPage component
import ChampionPage from "./pages/ChampionPage";
import InfoPage from "./pages/InfoPage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessibilityState, setAccessibilityState] = useState<PanelState>('minimized');
  const [profileAnalysisComplete, setProfileAnalysisComplete] = useState(false);
  const { isBionicActive } = useBionicText();

  const toggleAccessibility = () => {
    setAccessibilityState((prev: PanelState) => (prev === 'closed' ? 'minimized' : 'closed'));
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-background">

      {/* Accessibility Panel */}
      <AccessibilityPanel
        state={accessibilityState}
        onStateChange={setAccessibilityState}
      />

      {/* Marquee Bar */}
      <div className="marquee-container app-marquee w-100 bg-dark text-white">
        <div className="app-marquee-content small text-uppercase tracking-wider">
          NEXT DATA • SPILL THE STATS • LEAGUE OF LEGENDS LAN • NEXT DATA • SPILL THE STATS •
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="app-nav w-100 px-4 px-sm-5 py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none text-display fw-bold">
            <img
              src={logoMistDarkblue}
              alt="SpillTheStats logo"
              className="app-logo-mark app-logo-light"
            />
            <img
              src={logoDarkblueMist}
              alt="SpillTheStats logo"
              className="app-logo-mark app-logo-dark"
            />
            SpillTheStats
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="d-none d-lg-flex align-items-center gap-4 small">
          <button
            className="btn btn-sm btn-secondary rounded-pill d-flex align-items-center gap-2"
            onClick={toggleAccessibility}
            aria-label="Opciones de accesibilidad"
          >
            <UiIcon name="accessibility" size={18} />
            <span>Accesibilidad</span>
          </button>

          <Link
            to="/profile"
            className="btn btn-primary btn-sm rounded-pill d-flex align-items-center gap-2 text-decoration-none"
          >
            <UiIcon name="user" size={18} />
            <span>Perfil</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="d-flex d-lg-none flex-column align-items-center justify-content-center gap-1 app-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`d-block bg-dark transition-transform app-menu-line ${menuOpen ? "rotate-45 translate-y-1" : ""}`} style={{ width: "16px", height: "2px" }}></span>
          <span className={`d-block bg-dark transition-opacity app-menu-line ${menuOpen ? "opacity-0" : ""}`} style={{ width: "16px", height: "2px" }}></span>
          <span className={`d-block bg-dark transition-transform app-menu-line ${menuOpen ? "rotate-n45 translate-y-n1" : ""}`} style={{ width: "16px", height: "2px" }}></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="app-nav d-lg-none">
          <div className="d-flex flex-column px-4 py-3 gap-3 small">
            <button
              className="btn btn-outline btn-sm rounded-pill d-flex align-items-center gap-2"
              onClick={() => {
                toggleAccessibility();
                setMenuOpen(false);
              }}
            >
              <UiIcon name="accessibility" size={18} /> Accesibilidad
            </button>

            <Link to="/profile" className="btn btn-primary btn-sm rounded-pill d-flex align-items-center gap-2 text-decoration-none">
              <UiIcon name="user" size={18} />
              Perfil
            </Link>
          </div>
        </div>
      )}

      {/* Main Content Routes */}
      <main className="flex-grow-1 d-flex align-items-stretch">
        <Routes>
          <Route path="/" element={
            <div className="container-fluid p-0 d-flex flex-column flex-md-row w-100">
              {/* Hero artwork */}
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-surface app-hero-artwork">
                <img
                  src={heroTristana}
                  alt="Tristana Entrenadora de Dragones"
                  className="app-hero-image app-hero-image-light"
                  loading="lazy"
                />
                <img
                  src={heroPoros}
                  alt="Poros jugando"
                  className="app-hero-image app-hero-image-dark"
                  loading="lazy"
                />
              </div>

              {/* Right half - Title + Description + Button */}
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center px-4 px-md-5 py-5">
                <h1 className="h2 h-md-1 fw-bold text-center mb-4">
                  ¡Bienvenido a<br />Spill the Stats!
                </h1>

                <BionicText 
                  isActive={isBionicActive}
                  className="text-center small text-md-base leading-relaxed d-block app-hero-description"
                  style={{ maxWidth: "500px" }}
                  text="En nuestra página encontrarás los datos más recientes de League of Legends LAN, para buscar los mejores campeones y builds, counters, winrates y mucho más. Crea una cuenta para recomendaciones personalizadas con nuestro algoritmo personal de SpillTheStats."
                /> 

                {/* Login Button */}
                <div className="mt-4">
                  <Link to="/login" className="btn btn-primary btn-sm rounded-pill d-flex align-items-center gap-2 text-decoration-none">
                    <UiIcon name="user" size={18} />
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            </div>
          } /> 

          <Route
            path="/profile"
            element={
              <ProfilePage
                analysisComplete={profileAnalysisComplete}
                onAnalysisComplete={setProfileAnalysisComplete}
              />
            }
          />
          <Route path="/champion/:slug" element={<ChampionPage />} />
          <Route path="/faq" element={<InfoPage title="FAQ" />} />
          <Route path="/about" element={<InfoPage title="Quiénes Somos" />} />
          <Route path="/privacy" element={<InfoPage title="Política de Privacidad" />} />
          <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
          <Route path="/signup" element={<LoginPage mode="signup" />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer w-100 mt-auto">
        <div className="container-fluid px-4 px-md-5 py-4">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between pb-3 pb-md-0 mb-3 mb-md-0 pe-md-4">
              <div className="small">
                <p className="mb-0 d-flex align-items-center gap-1">
                  Made with <UiIcon name="heart" size={14} /> by CocoaTeaDevs
                </p>
              </div>
              <div className="d-flex align-items-center gap-4 mt-3">
                <span className="text-display fw-bold">SpillTheStats</span>
                <div className="d-flex align-items-center gap-3">
                  <a href="https://github.com/mcalar/SpillTheStats-Project" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle app-footer-social-link" title="GitHub" aria-label="SpillTheStats en GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="mailto:mcalar@unal.edu.co,julramirezdi@unal.edu.co" className="d-flex align-items-center justify-content-center rounded-circle app-footer-social-link" title="Enviar correo" aria-label="Enviar correo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="00 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-md-end gap-5 pt-2 pt-md-0 ps-md-4">
              <div className="d-flex flex-column gap-2">
                <h4 className="small fw-bold mb-1">Ayuda</h4>
                <Link to="/faq" className="small text-decoration-none hover-underline">FAQ</Link>
              </div>
              <div className="d-flex flex-column gap-2">
                <h4 className="small fw-bold mb-1">Otros</h4>
                <Link to="/about" className="small text-decoration-none hover-underline">Quiénes Somos</Link>
                <Link to="/privacy" className="small text-decoration-none hover-underline">Política de Privacidad</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}