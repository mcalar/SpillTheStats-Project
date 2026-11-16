import { useEffect, useState } from "react";
import { BionicText } from "../components/BionicText";
import { useBionicText } from "../hooks/useBionicText";
import asheImage from "../assets/square-ashe.webp";
import caitlynImage from "../assets/square-caitlyn.webp";
import jhinImage from "../assets/square-jhin.webp";
import manolitoProfileImage from "../assets/manolito-pfp.jpg";
import samiraImage from "../assets/square-samira.webp";
import yunaraImage from "../assets/square-yunara.webp";

const profileTags = ["Alto Daño", "Bajo Control", "Baja Visión"];
const favoriteChampions = [
  {
    name: "Jhin",
    image: jhinImage,
    description: "Tirador de largo alcance que convierte cada disparo en una amenaza.",
    tags: ["Bot", "Daño", "Control"],
  },
  {
    name: "Ashe",
    image: asheImage,
    description: "Tiradora de utilidad que ralentiza enemigos y apoya a su equipo.",
    tags: ["Bot", "Daño", "Utilidad"],
  },
  {
    name: "Caitlyn",
    image: caitlynImage,
    description: "Tiradora de largo alcance que domina la línea con trampas.",
    tags: ["Bot", "Daño", "Alcance"],
  },
  {
    name: "Samira",
    image: samiraImage,
    description: "Tiradora agresiva que mezcla ataques a distancia y cuerpo a cuerpo.",
    tags: ["Bot", "Daño", "Movilidad"],
  },
  {
    name: "Yunara",
    image: yunaraImage,
    description: "Tiradora que combina ataques precisos con poder espiritual.",
    tags: ["Bot", "Daño", "Movilidad"],
  },
];

export default function ProfilePage() {
  const { isBionicActive } = useBionicText();
  const [hoveredChampion, setHoveredChampion] = useState<string | null>(null);
  const [focusedChampion, setFocusedChampion] = useState<string | null>(null);
  const [pinnedChampion, setPinnedChampion] = useState<string | null>(null);
  const activeChampion = pinnedChampion ?? hoveredChampion ?? focusedChampion;

  useEffect(() => {
    if (!pinnedChampion) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const clickedChampion = event.target.closest<HTMLElement>("[data-champion]");
      if (clickedChampion?.dataset.champion !== pinnedChampion) {
        setPinnedChampion(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [pinnedChampion]);

  return (
    <div className="container py-5 profile-main">
      <section className="card mb-4 profile-summary" aria-label="Profile">
        <div className="profile-summary-layout">
          <img
            src={manolitoProfileImage}
            className="profile-avatar flex-shrink-0"
            alt="Profile picture of ManolitoGamer"
          />

          <div className="profile-info">
            <h1 className="profile-name mb-1">
              <BionicText isActive={isBionicActive} text="ManolitoGamer" />
            </h1>
            <p className="text-sm profile-muted mb-0">
              <BionicText isActive={isBionicActive} text="MANOLITO777#LAN" />
            </p>
          </div>

          <div className="profile-tags" aria-label="Profile tags">
            {profileTags.map((tag) => (
              <span className="profile-tag" key={tag}>
                <BionicText isActive={isBionicActive} text={tag} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="card profile-champions">
        <h2 className="text-xl mb-4">
          <BionicText isActive={isBionicActive} text="Campeones Afines" />
        </h2>
        <div className="profile-champion-grid">
          {favoriteChampions.map((champion) => (
            <div
              className={`profile-champion${activeChampion === champion.name ? " profile-champion-open" : ""}`}
              key={champion.name}
              data-champion={champion.name}
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
                onClick={() =>
                  setPinnedChampion((current) =>
                    current === champion.name ? null : champion.name,
                  )
                }
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
    </div>
  );
}
