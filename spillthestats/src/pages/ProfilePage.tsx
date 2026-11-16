import { BionicText } from "../components/BionicText";
import { UiIcon } from "../components/UiIcon";
import { useBionicText } from "../hooks/useBionicText";

const profileTags = ["Alto Daño", "Bajo Control", "Baja Visión"];
const favoriteChampions = ["Ahri", "Jinx", "Lux", "Yasuo", "Thresh"];

export default function ProfilePage() {
  const { isBionicActive } = useBionicText();

  return (
    <div className="container py-5 profile-main">
      <section className="card mb-4 profile-summary" aria-label="Profile">
        <div className="profile-summary-layout">
          <div
            className="profile-avatar flex-shrink-0"
            role="img"
            aria-label="Profile picture placeholder"
          >
            <UiIcon name="user" size={36} />
          </div>

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
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="card profile-champions">
        <h2 className="text-xl mb-4">Campeones Afines</h2>
        <div className="profile-champion-grid">
          {favoriteChampions.map((champion) => (
            <div className="profile-champion" key={champion}>
              <div
                className="profile-champion-placeholder"
                role="img"
                aria-label={`Placeholder portrait for ${champion}`}
              >
                <UiIcon name="user" size={32} />
              </div>
              <span className="profile-champion-name">{champion}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
