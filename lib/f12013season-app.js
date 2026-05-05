import { LitElement, html, css } from "lit";
import "./f12013season-reserve-drivers.js";

class F12013seasonApp extends LitElement {
  static get tag() { return "f12013season-app"; }

  constructor() {
    super();
    this.page = "home";
    this._handleRoute = this._handleRoute.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("hashchange", this._handleRoute);
    this._handleRoute();
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this._handleRoute);
    super.disconnectedCallback();
  }

  _handleRoute() {
    const hash = window.location.hash.replace("#/", "") || "home";
    this.page = hash;
  }

  static get properties() {
    return { page: { type: String } };
  }

  render() {
    return html`
      <f12013season-header></f12013season-header>
      <main>
        ${this.page === "home" ? html`
          <f12013season-hero></f12013season-hero>
          <f12013season-overview></f12013season-overview>
        ` : ""}
        ${this.page === "drivers" ? html`
          <f12013season-driver-list></f12013season-driver-list>
        ` : ""}
        ${this.page === "races" ? html`
          <f12013season-race-schedule></f12013season-race-schedule>
        ` : ""}
        ${this.page === "reserve-drivers" ? html`
          <f12013season-reserve-drivers></f12013season-reserve-drivers>
        ` : ""}
      </main>
      <f12013season-footer></f12013season-footer>
    `;
  }

  static get styles() {
    return css`:host { display: block; } main { padding: 16px; }`;
  }
}
customElements.define(F12013seasonApp.tag, F12013seasonApp);