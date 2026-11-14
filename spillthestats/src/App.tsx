import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { AccessibilityPanel, type PanelState } from "./components/AccessibilityPanel";
import { BionicText } from "./components/BionicText";
import { useBionicText } from "./hooks/useBionicText";
import './styles/marquee.css';
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessibilityState, setAccessibilityState] = useState<PanelState>('minimized');
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
        <div className="app-marquee-content font-monospace small text-uppercase tracking-wider">
          NEXT DATA • SPILL THE STATS • LEAGUE OF LEGENDS LAN • NEXT DATA • SPILL THE STATS •
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-100 px-4 px-sm-5 py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="text-display fw-bold text-decoration-none">
            SpillTheStats
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="d-none d-sm-flex align-items-center gap-4 font-monospace small">
          <Link to="/" className="text-decoration-none">Home</Link>
          <Link to="/" className="text-decoration-none">Análisis</Link>
          <Link to="/" className="text-decoration-none">Champions</Link>

          <button
            className="btn btn-sm btn-outline rounded-pill d-flex align-items-center gap-2"
            onClick={toggleAccessibility}
            aria-label="Opciones de accesibilidad"
          >
            <span>♿</span>
            <span>Accesibilidad</span>
          </button>

          <Link
            to="/profile"
            className="btn btn-primary btn-sm rounded-pill d-flex align-items-center gap-2 text-decoration-none"
          >
            <span aria-hidden="true">👤</span>
            <span>Perfil</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="d-sm-none d-flex flex-column align-items-center justify-content-center gap-1 app-menu-toggle"
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
        <div className="d-sm-none bg-surface">
          <div className="d-flex flex-column px-4 py-3 gap-3 font-monospace small">
            <Link to="/" className="text-decoration-none">Home</Link>
            <Link to="/" className="text-decoration-none">Análisis</Link>
            <Link to="/" className="text-decoration-none">Champions</Link>

            <button
              className="btn btn-outline btn-sm rounded-pill d-flex align-items-center gap-2"
              onClick={() => {
                toggleAccessibility();
                setMenuOpen(false);
              }}
            >
              <span>♿</span> Accesibilidad
            </button>

            <Link to="/profile" className="btn btn-primary btn-sm rounded-pill d-flex align-items-center gap-2 text-decoration-none">
              <span aria-hidden="true">👤</span>
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
                <div className="app-hero-chart" aria-hidden="true">
                  <span className="app-hero-bar app-hero-bar--1"></span>
                  <span className="app-hero-bar app-hero-bar--2"></span>
                  <span className="app-hero-bar app-hero-bar--3"></span>
                  <span className="app-hero-bar app-hero-bar--4"></span>
                  <span className="app-hero-bar app-hero-bar--5"></span>
                </div>
              </div>

              {/* Right half - Title + Description + Button */}
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center px-4 px-md-5 py-5">
                <h1 className="h2 h-md-1 fw-bold text-center mb-4">
                  ¡Bienvenido a<br />Spill the Stats!
                </h1>

                <BionicText 
                  isActive={isBionicActive}
                  className="text-center small text-md-base leading-relaxed font-monospace d-block app-hero-description"
                  style={{ maxWidth: "500px" }}
                  text="En nuestra página encontrarás los datos más recientes de League of Legends LAN, para buscar los mejores campeones y builds, counters, winrates y mucho más. Crea una cuenta para recomendaciones personalizadas con nuestro algoritmo personal de SpillTheStats."
                />

                <div className="mt-4">
                  <button className="btn btn-primary rounded-pill px-5 py-3 font-monospace small text-uppercase tracking-wide">
                    Crea una Cuenta
                  </button>
                </div>
              </div>
            </div>
          } />

          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer w-100 mt-auto">
        <div className="container-fluid px-4 px-md-5 py-4">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between pb-3 pb-md-0 mb-3 mb-md-0 pe-md-4">
              <div className="font-monospace small">
                <p className="mb-0">Made with ❤ by CocoaTeaDevs</p>
              </div>
              <div className="d-flex align-items-center gap-4 mt-3">
                <span className="text-display fw-bold">SpillTheStats</span>
                <div className="d-flex align-items-center gap-3">
                  <a href="#" className="d-flex align-items-center justify-content-center rounded-circle app-footer-social-link" title="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center rounded-circle app-footer-social-link" title="Inbox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-md-end gap-5 pt-2 pt-md-0 ps-md-4">
              <div className="d-flex flex-column gap-2">
                <h4 className="font-monospace small fw-bold mb-1">Ayuda</h4>
                <a href="#" className="font-monospace small text-decoration-none hover-underline">FAQ</a>
                <a href="#" className="font-monospace small text-decoration-none hover-underline">Contact Us</a>
              </div>
              <div className="d-flex flex-column gap-2">
                <h4 className="font-monospace small fw-bold mb-1">Otros</h4>
                <a href="#" className="font-monospace small text-decoration-none hover-underline">Política de Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}