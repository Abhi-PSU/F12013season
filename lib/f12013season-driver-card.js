import { LitElement, html, css } from "lit";

class F12013seasonDriverCard extends LitElement {
  static get tag() { return "f12013season-driver-card"; }

  static get properties() {
    return {
      number: { type: Number },
      name: { type: String },
      team: { type: String },
      nationality: { type: String },
      points: { type: Number },
      wins: { type: Number },
      color: { type: String },
    };
  }

  static get styles() {
    return css`
      :host { display: block; }
      .card {
        background: #1a1a1a;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s;
      }
      .card:hover { transform: translateY(-4px); }
      .accent {
        height: 6px;
      }
      .body {
        padding: 16px;
      }
      .number {
        font-size: 2rem;
        font-weight: 900;
        color: #e10600;
        line-height: 1;
      }
      .name {
        font-size: 1.1rem;
        font-weight: 700;
        color: white;
        margin: 6px 0 2px;
      }
      .team {
        font-size: 0.85rem;
        color: #aaa;
        margin-bottom: 12px;
      }
      .stats {
        display: flex;
        gap: 16px;
        border-top: 1px solid #333;
        padding-top: 10px;
      }
      .stat-label {
        font-size: 0.7rem;
        color: #777;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .stat-value {
        font-size: 1rem;
        font-weight: 700;
        color: white;
      }
      .flag {
        font-size: 0.75rem;
        color: #777;
        margin-top: 4px;
      }
      @media (prefers-color-scheme: light) {
  .card { background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  .name { color: #111; }
  .team { color: #555; }
  .flag { color: #555; }
  .stats { border-top: 1px solid #ddd; }
  .stat-value { color: #111; }
}
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="accent" style="background:${this.color || '#e10600'}"></div>
        <div class="body">
          <div class="number">#${this.number}</div>
          <div class="name">${this.name}</div>
          <div class="team">${this.team}</div>
          <div class="flag">${this.nationality}</div>
          <div class="stats">
            <div>
              <div class="stat-label">Points</div>
              <div class="stat-value">${this.points}</div>
            </div>
            <div>
              <div class="stat-label">Wins</div>
              <div class="stat-value">${this.wins}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonDriverCard.tag, F12013seasonDriverCard);