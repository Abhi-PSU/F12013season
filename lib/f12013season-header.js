import { LitElement, html, css } from "lit";

class F12013seasonHeader extends LitElement {
  static get tag() { return "f12013season-header"; }

  render() {
    return html`
      <nav>
        <span class="logo">F1 2013 Season</span>
        <a href="#/">Home</a>
        <a href="#/drivers">Drivers</a>
        <a href="#/races">Races</a>
      </nav>
    `;
  }

  static get styles() {
    return css`
      nav { display: flex; gap: 24px; padding: 16px; background: #e10600; align-items: center; }
      .logo { color: white; font-weight: bold; font-size: 20px; margin-right: auto; }
      a { color: white; text-decoration: none; font-weight: bold; }
      a:hover { text-decoration: underline; }
    `;
  }
}
customElements.define(F12013seasonHeader.tag, F12013seasonHeader);