import {LitElement,html,css} from "lit";
import {buttonStyle} from "./styles/button-style.js";

export class ButtonElement extends LitElement {
    static get styles() {
        return [buttonStyle];
    }

    render() {
        return html`
            
            <button  @click="${this._onClick}"><slot></slot></button>
        `;
    }
}

window.customElements.define('button-element', ButtonElement);
