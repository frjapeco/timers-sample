import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class TimersSampleApp extends PolymerElement {
  
  static get template() {
    return html
    `
      <timers-form></timers-form>
    `;
  }

  static get properties() {
    return {};
  }

}

window.customElements.define('timers-sample-app', TimersSampleApp);
