import "./App.css";
import "./styles/theme.css";
import AccountList from "./components/AccountList";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InfoGrid from "./components/InfoGrid";
import MapCard from "./components/MapCard";
import invitation from "./config/invitation";

function App() {
  const { couple, schedule, accounts, gallery, actions } = invitation;
  return (
    <div className="app">
      <div className="wrapper">
        <Hero couple={couple} actions={actions} />
        <main className="sections">
          <section className="card">
            <div className="section-title section">
              <h2>{schedule.title}</h2>
              <span className="muted">{couple.venue}</span>
            </div>
            <InfoGrid couple={couple} schedule={schedule} />
          </section>

          <MapCard couple={couple} />

          <Gallery gallery={gallery} />

          <AccountList accounts={accounts} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
