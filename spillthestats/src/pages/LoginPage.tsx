// src/pages/LoginPage.tsx
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { BionicText } from '../components/BionicText';
import { UiIcon } from '../components/UiIcon';
import { useBionicText } from '../hooks/useBionicText';

interface LoginPageProps {
  mode?: 'login' | 'signup';
}

const LoginPage: React.FC<LoginPageProps> = ({ mode = 'login' }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isBionicActive } = useBionicText();
  const isSignup = mode === 'signup';

  const handleConnectRiot = async () => {
    setLoading(true);
    try {
      // TODO: Integrate with Riot Games OAuth2 authorization flow.
      // Redirect the user to Riot's authorization endpoint so they can
      // log in with their Riot account and grant SpillTheStats access.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.alert(
        isSignup
          ? 'Cuenta de Riot creada con éxito'
          : 'Cuenta de Riot conectada con éxito',
      );
      navigate('/profile');
    } catch {
      window.alert('No se pudo conectar la cuenta de Riot. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex w-100 align-items-center justify-content-center bg-background px-3 py-4">
      <div className="mx-auto login-card-container">
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
                }}
                aria-hidden="true"
              >
                <UiIcon name="user" size={28} />
              </span>
              <h2 className="h3 h-md-2 fw-bold mt-4 mb-2 text-display">
                <BionicText
                  isActive={isBionicActive}
                  text={isSignup ? 'Crea una cuenta con Riot' : 'Inicia sesión con Riot'}
                />
              </h2>
              <p className="text-sm text-muted mb-0">
                <BionicText
                  isActive={isBionicActive}
                  text={
                    isSignup
                      ? 'Crea tu cuenta conectando tu cuenta de Riot para acceder a tus estadísticas de League of Legends LAN y obtener recomendaciones personalizadas.'
                      : 'Conecta tu cuenta de Riot para acceder a tus estadísticas de League of Legends LAN y obtener recomendaciones personalizadas.'
                  }
                />
              </p>
            </div>

            <div className="d-grid gap-3 mb-2">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill d-flex align-items-center justify-content-center gap-2"
                disabled={loading}
                onClick={handleConnectRiot}
                aria-label={isSignup ? 'Crear cuenta con Riot' : 'Conectar Riot Account'}
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: '20px', height: '20px' }}
                  aria-hidden="true"
                >
                  <UiIcon name="user" size={18} />
                </span>
                <BionicText
                  isActive={isBionicActive}
                  text={
                    loading
                      ? 'Conectando…'
                      : isSignup
                        ? 'Crear cuenta con Riot'
                        : 'Conectar Riot Account'
                  }
                />
              </button>
            </div>

            <div className="mt-1 text-center">
              <p className="text-sm text-muted mb-0">
                <BionicText
                  isActive={isBionicActive}
                  text={isSignup ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
                />{' '}
                <Link
                  to={isSignup ? '/login' : '/signup'}
                  className="fw-bold text-decoration-none hover-underline login-signup-link"
                  aria-label={isSignup ? 'Iniciar sesión' : 'Crear una cuenta nueva'}
                >
                  <BionicText
                    isActive={isBionicActive}
                    text={isSignup ? 'Inicia sesión' : 'Crea una cuenta'}
                  />
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