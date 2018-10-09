import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class TimersForm extends PolymerElement {
  
  static get template() {
    return html
    `
      <input type="text" id="title"></input>
      <input type="number" id="seconds"></input>
      <button on-click="createTimer">Create</button>
    `;
  }

  createTimer() {
  	let title = this.$.title.value;
  	let seconds = this.$.seconds.value;
  	this.parentNode.innerHTML = this.parentNode.innerHTML + 
  	`
  	 <single-timer title="${title}" interval=${seconds}></single-timer>
  	`;
  }

  static get properties() {
    return {};
  }

}

window.customElements.define('timers-form', TimersForm);