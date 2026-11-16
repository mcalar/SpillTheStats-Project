import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BionicText } from "../components/BionicText";
import { useBionicText } from "../hooks/useBionicText";
import { champions } from "../data/champions";

interface RecommendationImageProps {
  src: string;
  kind: "rune" | "item";
}

function RecommendationImage({ src, kind }: RecommendationImageProps) {
  const [unavailable, setUnavailable] = useState(false);
  const imageClassName = kind === "rune" ? "champion-rune-image" : "champion-item-image";

  if (unavailable) {
    return (
      <span className={`${imageClassName} champion-image-fallback`} aria-hidden="true">
        {kind === "rune" ? "✦" : "◆"}
      </span>
    );
  }

  return (
    <img
      className={imageClassName}
      src={src}
      alt=""
      loading="lazy"
      onError={() => setUnavailable(true)}
    />
  );
}

export default function ChampionPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isBionicActive } = useBionicText();
  const champion = champions.find((candidate) => candidate.slug === slug);

  if (!champion) {
    return (
      <div className="container py-5 champion-page-main">
        <section className="card champion-not-found">
          <h1 className="text-xl mb-3">
            <BionicText isActive={isBionicActive} text="No encontramos ese campeón" />
          </h1>
          <Link to="/profile" className="btn btn-primary rounded-pill align-self-start">
            <BionicText isActive={isBionicActive} text="Volver al perfil" />
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container py-5 champion-page-main">
      <Link to="/profile" className="btn btn-outline-secondary rounded-pill champion-back-link">
        <BionicText isActive={isBionicActive} text="Volver al perfil" />
      </Link>

      <section className="card champion-overview" aria-labelledby="champion-title">
        <img
          className="champion-profile-image"
          src={champion.image}
          alt={`Retrato de ${champion.name}`}
        />
        <div className="champion-overview-content">
          <h1 className="champion-page-title" id="champion-title">
            <BionicText isActive={isBionicActive} text={champion.name} />
          </h1>
          <p className="champion-page-description">
            <BionicText isActive={isBionicActive} text={champion.description} />
          </p>
          <div className="champion-page-tags" aria-label={`Etiquetas de ${champion.name}`}>
            {champion.tags.map((tag) => (
              <span className="profile-tag" key={tag}>
                <BionicText isActive={isBionicActive} text={tag} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="card champion-build-section" aria-labelledby="recommended-runes">
        <h2 className="text-xl mb-4" id="recommended-runes">
          <BionicText isActive={isBionicActive} text="Runas recomendadas" />
        </h2>
        <div className="champion-recommendation-list">
          {champion.runes.map((rune) => (
            <figure className="champion-recommendation" key={rune.name}>
              <RecommendationImage src={rune.image} kind="rune" />
              <figcaption>
                <BionicText isActive={isBionicActive} text={rune.name} />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="card champion-build-section" aria-labelledby="recommended-items">
        <h2 className="text-xl mb-4" id="recommended-items">
          <BionicText isActive={isBionicActive} text="Ítems recomendados" />
        </h2>
        <div className="champion-recommendation-list">
          {champion.items.map((recommendedItem) => (
            <figure className="champion-recommendation" key={recommendedItem.name}>
              <RecommendationImage src={recommendedItem.image} kind="item" />
              <figcaption>
                <BionicText isActive={isBionicActive} text={recommendedItem.name} />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
