import { LitElement, html, css } from "lit";

class F12013seasonHeader extends LitElement {
  static get tag() { return "f12013season-header"; }

  render() {
    return html`
      <nav>
        <span class="logo">F1 2013 Season</span>
        <a href="#/">Home</a>

        <div class="dropdown">
          <a href="#/drivers">Drivers</a>
          <div class="dropdown-menu">
            <a href="#/drivers">Race Drivers</a>
            <a href="#/reserve-drivers">Reserve Drivers</a>
          </div>
        </div>

        <a href="#/races">Races</a>
      </nav>
    `;
  }

  static get styles() {
    return css`
      nav {
        display: flex;
        gap: 24px;
        padding: 16px;
        background: #e10600;
        align-items: center;
      }
      .logo {
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin-right: auto;
      }
      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
      a:hover { text-decoration: underline; }

      .dropdown {
        position: relative;
      }
      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #111;
        min-width: 160px;
        border-top: 3px solid #e10600;
        z-index: 100;
        flex-direction: column;
      }
      .dropdown-menu a {
        display: block;
        padding: 10px 16px;
        font-weight: normal;
        white-space: nowrap;
      }
      .dropdown-menu a:hover {
        background: #222;
        text-decoration: none;
      }
      .dropdown:hover .dropdown-menu {
        display: flex;
      }
    `;
  }
}
customElements.define(F12013seasonHeader.tag, F12013seasonHeader);