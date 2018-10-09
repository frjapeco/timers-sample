import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class SingleTimer extends PolymerElement {
  
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.remainingTime = this.interval * 1000;
    this.currentTime = undefined;
    this.togglePauseMessage = "pause";
    this.pause = false;
    this.endTime = new Date(new Date().getTime() + this.remainingTime);
    this.setTimeFormat();
    this.timer = setTimeout(() => this.getRemainingTime(),200);
  }

  togglePause() {
    this.pause = !this.pause;
    if (this.pause) {
      clearTimeout(this.timer);
      this.togglePauseMessage = "resume";
    } else {
      this.togglePauseMessage = "pause";
      this.endTime = new Date(new Date().getTime() + this.remainingTime);
      this.timer = setTimeout(() => this.getRemainingTime(),200);
    }
  }

  delete() {
    this.parentNode.removeChild(this);
  }

  setTimeFormat() {
      let seconds = this.remainingTime / 1000;
      let hours = parseInt(seconds / 3600);
      seconds = seconds % 3600;
      let minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);
      this.hours = hours > 9 ? `${hours}` : `0${hours}`;
      this.minutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
      this.seconds = seconds > 9 ? `${seconds}` : `0${seconds}`;
  }

  getRemainingTime() {
      this.currentTime = new Date();
      this.remainingTime = this.endTime.getTime() - this.currentTime.getTime();
      if (this.remainingTime > 0) {
        this.setTimeFormat();
        this.timer = setTimeout(() => this.getRemainingTime(),200);
      }
  }

  static get template() {
    return html
    `
      <h3>{{title}}</h3>
      <h1>{{hours}}:{{minutes}}:{{seconds}}</h1>
      <button on-click="delete">Delete</button>
      <button on-click="togglePause">{{togglePauseMessage}}</button>
    `;
  }

  static get properties() {
    return {
      title: {
        type: String
      },
      interval: {
        type: Number
      }
    }
  }

}

window.customElements.define('single-timer', SingleTimer);