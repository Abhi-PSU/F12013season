import { LitElement, html, css } from "lit";

class F12013seasonRaceCard extends LitElement {
  static get tag() { return "f12013season-race-card"; }

  static get properties() {
    return {
      round: { type: Number },
      name: { type: String },
      circuit: { type: String },
      location: { type: String },
      date: { type: String },
      winner: { type: String },
      team: { type: String },
      laps: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host { display: block; }
      .card {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        gap: 16px;
        align-items: flex-start;
        transition: transform 0.2s;
      }
      .card:hover { transform: translateX(4px); }
      .round {
        background: #e10600;
        color: white;
        font-weight: 900;
        font-size: 0.85rem;
        border-radius: 4px;
        padding: 4px 8px;
        min-width: 36px;
        text-align: center;
        flex-shrink: 0;
      }
      .info { flex: 1; }
      .name {
        color: white;
        font-weight: 700;
        font-size: 1rem;
        margin: 0 0 2px;
      }
      .circuit {
        color: #888;
        font-size: 0.8rem;
        margin-bottom: 8px;
      }
      .meta {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }
      .meta-item { }
      .meta-label {
        font-size: 0.65rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .meta-value {
        font-size: 0.85rem;
        color: #ccc;
        font-weight: 600;
      }
      .winner-value {
        color: #e10600;
        font-weight: 700;
      }

      @media (prefers-color-scheme: light) {
  .card { background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  .name { color: #111; }
  .circuit { color: #555; }
  .meta-value { color: #333; }
}
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="round">R${this.round}</div>
        <div class="info">
          <div class="name">${this.name}</div>
          <div class="circuit">${this.circuit} · ${this.location}</div>
          <div class="meta">
            <div class="meta-item">
              <div class="meta-label">Date</div>
              <div class="meta-value">${this.date}, 2013</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Winner</div>
              <div class="meta-value winner-value">${this.winner}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Laps</div>
              <div class="meta-value">${this.laps}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonRaceCard.tag, F12013seasonRaceCard);