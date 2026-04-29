import { LitElement, html, css } from "lit";
import "./f12013season-driver-card.js";

class F12013seasonDriverList extends LitElement {
  static get tag() { return "f12013season-driver-list"; }

  static get properties() {
    return {
      drivers: { type: Array },
    };
  }

  constructor() {
    super();
    this.drivers = [];
  }

  connectedCallback() {
    super.connectedCallback();
    fetch("./data/drivers.json")
      .then(res => res.json())
      .then(data => { this.drivers = data; });
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
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
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
        <h2>2013 Driver Lineup</h2>
        <p class="subtitle">22 drivers. 19 races. One champion.</p>
        <div class="grid">
          ${this.drivers.map(d => html`
            <f12013season-driver-card
              .number=${d.number}
              .name=${d.name}
              .team=${d.team}
              .nationality=${d.nationality}
              .points=${d.points}
              .wins=${d.wins}
              .color=${d.color}
            ></f12013season-driver-card>
          `)}
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonDriverList.tag, F12013seasonDriverList);