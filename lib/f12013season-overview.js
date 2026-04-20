import { LitElement, html } from "lit";
class F12013seasonOverview extends LitElement {
  static get tag() { return "f12013season-overview"; }
  render() { return html`<div style="padding:24px;color:white"><h2>Season Overview</h2><p>19 races. 11 constructors. One dominant champion.</p></div>`; }
}
customElements.define(F12013seasonOverview.tag, F12013seasonOverview);