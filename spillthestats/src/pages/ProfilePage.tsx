import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BionicText } from "../components/BionicText";
import { useBionicText } from "../hooks/useBionicText";
import manolitoProfileImage from "../assets/manolito-pfp.jpg";
import { champions } from "../data/champions";

const profileTags = ["Alto Daño", "Bajo Control", "Baja Visión"];

interface ProfilePageProps {
  analysisComplete: boolean;
  onAnalysisComplete: (complete: boolean) => void;
}

export default function ProfilePage({
  analysisComplete,
  onAnalysisComplete,
}: ProfilePageProps) {
  const { isBionicActive } = useBionicText();
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hoveredChampion, setHoveredChampion] = useState<string | null>(null);
  const [focusedChampion, setFocusedChampion] = useState<string | null>(null);
  const activeChampion = hoveredChampion ?? focusedChampion;

  useEffect(() => {
    if (!isAnalyzing) return;

    const timeoutId = window.setTimeout(() => {
      setIsAnalyzing(false);
      onAnalysisComplete(true);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [isAnalyzing, onAnalysisComplete]);

  if (isAnalyzing) {
    return (
      <div className="container py-5 profile-main">
        <section
          className="card profile-analysis-loading"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <span className="profile-analysis-spinner" aria-hidden="true" />
          <h1 className="text-xl mb-2">
            <BionicText isActive={isBionicActive} text="Analizando tu perfil" />
          </h1>
          <p className="mb-0">
            <BionicText
              isActive={isBionicActive}
              text="Estamos buscando los campeones y las etiquetas que mejor se adaptan a ti."
            />
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="container py-5 profile-main">
      <section className="card mb-4 profile-summary" aria-label="Perfil">
        <div className="profile-summary-layout">
          <img
            src={manolitoProfileImage}
            className="profile-avatar flex-shrink-0"
            alt="Foto de perfil de ManolitoGamer"
          />

          <div className="profile-info">
            <h1 className="profile-name mb-1">
              <BionicText isActive={isBionicActive} text="ManolitoGamer" />
            </h1>
            <p className="text-sm profile-muted mb-0">
              <BionicText isActive={isBionicActive} text="MANOLITO777#LAN" />
            </p>
          </div>

          {analysisComplete && (
            <div className="profile-tags" aria-label="Etiquetas del perfil">
              {profileTags.map((tag) => (
                <span className="profile-tag" key={tag}>
                  <BionicText isActive={isBionicActive} text={tag} />
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {analysisComplete ? (
        <>
          <section className="card mb-4 profile-champions">
            <h2 className="text-xl mb-4">
              <BionicText isActive={isBionicActive} text="Campeones Afines" />
            </h2>
            <div className="profile-champion-grid">
              {champions.map((champion) => (
                <div
                  className={`profile-champion${activeChampion === champion.name ? " profile-champion-open" : ""}`}
                  key={champion.name}
                  data-champion={champion.slug}
                  onMouseEnter={() => setHoveredChampion(champion.name)}
                  onMouseLeave={() => setHoveredChampion(null)}
                >
                  <button
                    className="profile-champion-trigger"
                    id={`champion-trigger-${champion.name}`}
                    type="button"
                    aria-expanded={activeChampion === champion.name}
                    aria-controls={activeChampion === champion.name ? `champion-details-${champion.name}` : undefined}
                    onFocus={() => setFocusedChampion(champion.name)}
                    onBlur={() => setFocusedChampion(null)}
                    onClick={() => navigate(`/champion/${champion.slug}`)}
                  >
                    <img
                      className="profile-champion-image"
                      src={champion.image}
                      alt=""
                    />
                    <span className="profile-champion-name">
                      <BionicText isActive={isBionicActive} text={champion.name} />
                    </span>
                  </button>
                  {activeChampion === champion.name && (
                    <div
                      className="profile-champion-details"
                      id={`champion-details-${champion.name}`}
                      role="region"
                      aria-labelledby={`champion-trigger-${champion.name}`}
                    >
                      <h3 className="profile-champion-details-name">
                        <BionicText isActive={isBionicActive} text={champion.name} />
                      </h3>
                      <p className="profile-champion-description">
                        <BionicText isActive={isBionicActive} text={champion.description} />
                      </p>
                      <div className="profile-champion-tags">
                        {champion.tags.map((tag) => (
                          <span className="profile-champion-tag" key={tag}>
                            <BionicText isActive={isBionicActive} text={tag} />
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <p className="profile-analysis-complete" role="status">
            <BionicText isActive={isBionicActive} text="Análisis completado." />
          </p>
        </>
      ) : (
        <section className="card profile-analysis-action">
          <p className="mb-3">
            <BionicText
              isActive={isBionicActive}
              text="Descubre qué campeones y etiquetas se adaptan mejor a tu estilo."
            />
          </p>
          <button
            className="btn btn-primary rounded-pill"
            type="button"
            onClick={() => setIsAnalyzing(true)}
          >
            <BionicText isActive={isBionicActive} text="Realizar análisis" />
          </button>
        </section>
      )}
    </div>
  );
}
