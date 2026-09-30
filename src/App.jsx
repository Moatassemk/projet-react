import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="page">
      <div className="card">

        <img
          src={profile}
          alt="Photo de profil"
          className="profile-image"
        />

        <p className="welcome">BIENVENUE 👋</p>

        <h1>
          Je suis <span>Almoatassem bellah Elkouz</span>
        </h1>

        <h2>Étudiant en MPILC</h2>

        <p className="description">
          Passionné par le développement web et les nouvelles technologies.
        </p>

        <a href="https://github.com/Moatassemk/" target="_blank" rel="noopener noreferrer">
          <button>Découvrir mes projets →</button>
        </a>

      </div>
    </div>
  );
}

export default App;