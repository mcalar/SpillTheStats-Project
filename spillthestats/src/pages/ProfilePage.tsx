import { Link } from "react-router-dom";
import { BionicText } from "../components/BionicText";
import { useBionicText } from "../hooks/useBionicText";

export default function ProfilePage() {
  const { isBionicActive } = useBionicText();

  return (
    <div className="container py-5 profile-main">
      <h1 className="mb-4">My Profile</h1>

      {/* Profile Card */}
      <section className="card mb-4">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div className="profile-avatar flex-shrink-0" role="img" aria-label="Profile avatar">
            <span aria-hidden="true">👤</span>
          </div>

          <div className="flex-grow-1">
            <h2 className="text-xl mb-1">Your name</h2>
            <p className="text-sm profile-muted mb-1">@username</p>
            <BionicText
              isActive={isBionicActive}
              className="text-sm profile-muted d-block"
              text="Add a short bio to tell the community about yourself."
            />
          </div>

          <button className="btn btn-outline rounded-pill" type="button">
            Edit profile
          </button>
        </div>
      </section>

      {/* Favorite Champions Panel */}
      <section className="card mb-4">
        <h3 className="text-lg mb-3">Favorite champions</h3>
        <div>
          <BionicText
            isActive={isBionicActive}
            className="text-sm profile-muted d-block"
            text="Your followed champions will appear here."
          />
        </div>
      </section>

      {/* Recent Activity Panel */}
      <section className="card mb-4">
        <h3 className="text-lg mb-3">Recent activity</h3>
        <div>
          <BionicText
            isActive={isBionicActive}
            className="text-sm profile-muted d-block"
            text="Your saved articles and recent activity will appear here."
          />
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline rounded-pill">
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  );
}