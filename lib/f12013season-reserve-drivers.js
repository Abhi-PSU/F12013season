import { LitElement, html, css } from "lit";

const reserveDrivers = [
  { name: "Sébastien Buemi", team: "Red Bull Racing", nationality: "Swiss", note: "Current Formula E champion, Red Bull's primary test/reserve" },
  { name: "Marc Gené", team: "Ferrari", nationality: "Spanish", note: "Long-time Ferrari simulator and test driver" },
  { name: "Pedro de la Rosa", team: "Ferrari", nationality: "Spanish", note: "Former HRT racer, joined Ferrari's test program for 2013" },
  { name: "Gary Paffett", team: "McLaren", nationality: "British", note: "DTM champion and long-serving McLaren test driver" },
  { name: "Oliver Turvey", team: "McLaren", nationality: "British", note: "McLaren reserve and simulator driver" },
  { name: "Davide Valsecchi", team: "Lotus", nationality: "Italian", note: "2012 GP2 champion, drove in pre-season testing for Lotus" },
  { name: "Jérôme d'Ambrosio", team: "Lotus", nationality: "Belgian", note: "Former Virgin/Marussia racer serving as Lotus reserve" },
  { name: "Nicolas Prost", team: "Lotus", nationality: "French", note: "Son of Alain Prost, Lotus development and test driver" },
  { name: "Heikki Kovalainen", team: "Caterham", nationality: "Finnish", note: "Lost his race seat but stayed on as Caterham test driver" },
  { name: "Ma Qing Hua", team: "Caterham", nationality: "Chinese", note: "Made one FP1 appearance in China, first Chinese F1 driver" },
  { name: "Rodolfo González", team: "Marussia", nationality: "Venezuelan", note: "FP1 appearances and testing duties for Marussia" },
  { name: "Tio Ellinas", team: "Marussia", nationality: "Cypriot", note: "First Cypriot driver to test an F1 car" },
];

class F12013seasonReserveDrivers extends LitElement {
  static get tag() { return "f12013season-reserve-drivers"; }

  static get styles() {
    return css`
      :host { display: block; }
      .page {
        padding: 32px 24px;
        background: #111;
        min-height: 100vh;
      }
      .page-header {
        border-left: 4px solid #e10600;
        padding-left: 12px;
        margin-bottom: 8px;
      }
      h2 {
        color: white;
        font-size: 2rem;
        margin: 0 0 4px 0;
      }
      .subtitle {
        color: #888;
        font-size: 0.95rem;
        margin: 0 0 32px 0;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
      }
      .card {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-top: 3px solid #e10600;
        border-radius: 4px;
        padding: 16px;
      }
      .driver-name {
        color: white;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 4px 0;
      }
      .team {
        color: #e10600;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0 0 8px 0;
      }
      .nationality {
        color: #aaa;
        font-size: 0.82rem;
        margin: 0 0 10px 0;
      }
      .note {
        color: #777;
        font-size: 0.82rem;
        line-height: 1.5;
        border-top: 1px solid #2a2a2a;
        padding-top: 10px;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <div class="page">
        <div class="page-header">
          <h2>Reserve Drivers</h2>
        </div>
        <p class="subtitle">Test and reserve drivers across all 11 constructors in the 2013 season.</p>
        <div class="grid">
          ${reserveDrivers.map(d => html`
            <div class="card">
              <p class="driver-name">${d.name}</p>
              <p class="team">${d.team}</p>
              <p class="nationality">${d.nationality}</p>
              <p class="note">${d.note}</p>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonReserveDrivers.tag, F12013seasonReserveDrivers);