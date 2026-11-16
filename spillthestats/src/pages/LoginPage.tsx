// src/pages/LoginPage.tsx
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { BionicText } from '../components/BionicText';
import { useBionicText } from '../hooks/useBionicText';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isBionicActive } = useBionicText();

  const handleConnectRiot = async () => {
    setLoading(true);
    try {
      // TODO: Integrate with Riot Games OAuth2 authorization flow.
      // Redirect the user to Riot's authorization endpoint so they can
      // log in with their Riot account and grant SpillTheStats access.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.alert('Cuenta de Riot conectada con éxito');
      navigate('/profile');
    } catch {
      window.alert('No se pudo conectar la cuenta de Riot. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex w-100 align-items-center justify-content-center bg-background px-3 py-4">
      <div className="mx-auto" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="card shadow-lg login-card">
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-5">
              <span
                className="d-inline-flex align-items-center justify-content-center"
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-indigo-velvet)',
                  color: 'var(--color-mist)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1.75rem',
                }}
                aria-hidden="true"
              >
                👤
              </span>
              <h2 className="h3 h-md-2 fw-bold mt-4 mb-2 text-display">
                <BionicText
                  isActive={isBionicActive}
                  text="Inicia sesión con Riot"
                />
              </h2>
              <p className="text-sm text-muted mb-0">
                <BionicText
                  isActive={isBionicActive}
                  text="Conecta tu cuenta de Riot para acceder a tus estadísticas de League of Legends LAN y obtener recomendaciones personalizadas."
                />
              </p>
            </div>

            <div className="d-grid gap-3 mb-2">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill d-flex align-items-center justify-content-center gap-2"
                disabled={loading}
                onClick={handleConnectRiot}
                aria-label="Conectar con cuenta de Riot"
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: '20px', height: '20px' }}
                  aria-hidden="true"
                >
                  👤
                </span>
                <BionicText
                  isActive={isBionicActive}
                  text={loading ? 'Conectando…' : 'Conectar con cuenta de Riot'}
                />
              </button>
            </div>

            <div className="mt-1 text-center">
              <p className="text-sm text-muted mb-0">
                <BionicText isActive={isBionicActive} text="¿No tienes una cuenta?" />{' '}
                <Link
                  to="/signup"
                  className="fw-bold text-decoration-none hover-underline"
                  aria-label="Crear una cuenta nueva"
                >
                  <BionicText isActive={isBionicActive} text="Crea una cuenta" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;