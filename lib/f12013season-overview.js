import { LitElement, html, css } from "lit";

class F12013seasonOverview extends LitElement {
  static get tag() { return "f12013season-overview"; }

  static get styles() {
    return css`
      :host { display: block; }
      .section {
        background: #111;
        padding: 48px 40px;
      }
      h2 {
        color: white;
        font-size: 1.8rem;
        font-weight: 900;
        margin: 0 0 8px;
        border-left: 4px solid #e10600;
        padding-left: 14px;
      }
      .intro {
        color: #888;
        font-size: 0.95rem;
        margin: 0 0 36px;
        padding-left: 18px;
      }
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 16px;
      }
      .card {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 20px;
        border-top: 3px solid #e10600;
      }
      .card-title {
        color: #e10600;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 8px;
      }
      .card-name {
        color: white;
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 4px;
      }
      .card-detail {
        color: #888;
        font-size: 0.85rem;
      }
      @media (prefers-color-scheme: light) {
  .section { background: #f5f5f5; }
  h2 { color: #111; }
  .intro { color: #555; }
  .card { background: white; border-top: 3px solid #e10600; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  .card-name { color: #111; }
  .card-detail { color: #555; }
}
    `;
  }

  render() {
    return html`
      <div class="section">
        <h2>Season Overview</h2>
        <p class="intro">19 races. 11 constructors. One dominant champion.</p>
        <div class="cards">
          <div class="card">
            <div class="card-title">World Champion</div>
            <div class="card-name">Sebastian Vettel</div>
            <div class="card-detail">Red Bull Racing · 397 pts</div>
          </div>
          <div class="card">
            <div class="card-title">Constructors Champion</div>
            <div class="card-name">Red Bull Racing</div>
            <div class="card-detail">596 points total</div>
          </div>
          <div class="card">
            <div class="card-title">Most Wins</div>
            <div class="card-name">13 Victories</div>
            <div class="card-detail">Vettel · incl. 9 consecutive</div>
          </div>
          <div class="card">
            <div class="card-title">Season Opener</div>
            <div class="card-name">Australian GP</div>
            <div class="card-detail">Won by Kimi Räikkönen</div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonOverview.tag, F12013seasonOverview);