import { LitElement, html, css } from "lit";

class F12013seasonHero extends LitElement {
  static get tag() { return "f12013season-hero"; }

  static get styles() {
    return css`
      :host { display: block; }
      .hero {
        position: relative;
        width: 100%;
        height: 520px;
        overflow: hidden;
      }
      .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 20%;
        display: block;
      }
      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 48px 40px;
      }
      .season-label {
        color: #e10600;
        font-size: 0.85rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        margin-bottom: 12px;
      }
      h1 {
        color: white;
        font-size: 3rem;
        font-weight: 900;
        margin: 0 0 12px;
        line-height: 1.1;
      }
      .tagline {
        color: #ccc;
        font-size: 1.1rem;
        margin: 0 0 28px;
        max-width: 500px;
      }
      .stats-row {
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
      }
      .stat {
        border-left: 3px solid #e10600;
        padding-left: 12px;
      }
      .stat-number {
        color: white;
        font-size: 1.8rem;
        font-weight: 900;
        line-height: 1;
      }
      .stat-label {
        color: #aaa;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: 2px;

        
      }
      @media (prefers-color-scheme: light) {
  .overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%);
  }
}
    `;
  }

  render() {
    return html`
      <div class="hero">
        <img class="hero-img" src="./assets/driverlineup.jpg" alt="2013 F1 Driver Lineup" />
        <div class="overlay">
          <div class="season-label">Formula 1 · 2013 Season</div>
          <h1>The Year of Vettel</h1>
          <p class="tagline">Sebastian Vettel and Red Bull Racing delivered one of the most dominant championship campaigns in modern F1 history.</p>
          <div class="stats-row">
            <div class="stat">
              <div class="stat-number">13</div>
              <div class="stat-label">Race Wins</div>
            </div>
            <div class="stat">
              <div class="stat-number">397</div>
              <div class="stat-label">Points</div>
            </div>
            <div class="stat">
              <div class="stat-number">19</div>
              <div class="stat-label">Rounds</div>
            </div>
            <div class="stat">
              <div class="stat-number">11</div>
              <div class="stat-label">Constructors</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(F12013seasonHero.tag, F12013seasonHero);