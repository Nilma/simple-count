import "./App.css";
import StateCounterCard from "./components/StateCounterCard.jsx";
import PropsCounterCard from "./components/PropsCounterCard.jsx";

export default function App() {
  return (
    <main className="page">
      <h1 className="title">State vs Props – Simple Count</h1>

      <section className="grid">
        <StateCounterCard />
        <PropsCounterCard />
      </section>

      <hr className="divider" />

      <section className="notes">
        <h2>How to build components</h2>
        <ul>
          <li>State lives where the data is owned</li>
          <li>Props pass data down and events up</li>
          <li>Keep components small and single-purpose</li>
        </ul>
      </section>
    </main>
  );
}