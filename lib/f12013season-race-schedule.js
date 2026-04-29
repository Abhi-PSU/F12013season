import { LitElement, html, css } from "lit";
import "./f12013season-race-card.js";

class F12013seasonRaceSchedule extends LitElement {
  static get tag() { return "f12013season-race-schedule"; }

  static get properties() {
    return {
      races: { type: Array },
    };
  }

  constructor() {
    super();
    this.races = [];
  }

  connectedCallback() {
    super.connectedCallback();
    fetch("./data/races.json")
      .then(res => res.json())
      .then(data => { this.races = data; })
      .catch(err => console.error("Fetch failed:", err));
  }

  static get styles() {
    return css`
      :host { display: block; }
      .page {
        padding: 32px 24px;
        background: #111;
        min-height: 100vh;
      }
      h2 {
        color: white;
        font-size: 2rem;
        margin: 0 0 8px;
        border-left: 4px solid #e10600;
        padding-left: 12px;
      }
      .subtitle {
        color: #888;
        margin: 0 0 28px;
        font-size: 0.95rem;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 800px
        margin: 0 auto;
      }
      @media (prefers-color-scheme: light) {
  .page { background: #f5f5f5; }
  h2 { color: #111; }
  .subtitle { color: #555; }
}
    `;
  }

  render() {
    return html`
      <div class="page">
        <h2>2013 Race Calendar</h2>
        <p class="subtitle">19 rounds across 5 continents.</p>
        <div class="list">
          ${this.races.map(r => html`
            <f12013season-race-card
              .round=${r.round}
              .name=${r.name}
              .circuit=${r.circuit}
              .location=${r.location}
              .date=${r.date}
              .winner=${r.winner}
              .team=${r.team}
              .laps=${r.laps}
            ></f12013season-race-card>
          `)}
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonRaceSchedule.tag, F12013seasonRaceSchedule);