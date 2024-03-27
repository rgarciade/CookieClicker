import {LitElement, html, css} from "lit";
import {navigate} from "../components/nav-element.js";
//import {scores} from "/src/status/index.js";
import "../components/icon-element.js";
import "../components/button-element.js";
import {identifyStyle} from "./styles/identify-container-style.js";
import {commonStyle} from "../styles/common.js";

export class IdentifyContainerElement extends LitElement {
    static get styles() {
        return [identifyStyle,commonStyle,
            css`
                input {
                    min-width: 400px;
                }
            `
        ];
    }
    constructor() {
        super();
        this.gamerName = '';

    }
    getScoresHtml(){
        const scoresData = ''//scores.getScores();
        return Object.keys(scoresData).sort(
            (a, b) => scoresData[b] - scoresData[a]
        ).map((name, index) => {
            const score = scoresData[name].value;
            return html`<li>${name}: ${score}</li>`
        });
    }
    render() {
        return html`
            <div class="container">
                <div class="bests">
                    <h2>The Bests</h2>
                    <ol>
                        ${this.getScoresHtml()}
                    </ol>
                </div>
                <input placeholder="Gamer Name" @input="${this._handleInput}"/>
                <button-element text="Join game" @click="${this._joinGame}">Jugar</button-element>
            </div>
        `;
    }

    _handleInput(event) {
        this.gamerName = event.target.value;
    }
    _joinGame(){
        if(!this.gamerName) return;
        this.dispatchEvent(new CustomEvent('router-navigate', {
            detail: '/game?name=' + encodeURIComponent(this.gamerName),
            bubbles: true,
            composed: true
        }));
    }
}


window.customElements.define('identify-container-element', IdentifyContainerElement);
