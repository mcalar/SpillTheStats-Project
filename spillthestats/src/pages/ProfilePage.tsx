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
  { name: "Jhin", image: jhinImage },
  { name: "Ashe", image: asheImage },
  { name: "Caitlyn", image: caitlynImage },
  { name: "Samira", image: samiraImage },
  { name: "Yunara", image: yunaraImage },
];

export default function ProfilePage() {
  const { isBionicActive } = useBionicText();

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
            <div className="profile-champion" key={champion.name}>
              <img
                className="profile-champion-image"
                src={champion.image}
                alt={`${champion.name} champion portrait`}
              />
              <span className="profile-champion-name">{champion.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
