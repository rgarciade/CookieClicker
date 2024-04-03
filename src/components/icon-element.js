import { LitElement, html } from 'lit';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { iconStyle } from './styles/icon-style.js';
export class IconElement extends LitElement {
	/**
	 * @property {String} icon - Icon name from material design.
	 */
	static get properties() {
		return {
			icon: { type: String },
		};
	}
	static get styles() {
		return [iconStyle];
	}

	constructor() {
		super();
	}
	render() {
		return html` <i class="material-icons">${this.icon}</i> `;
	}
}
window.customElements.define('icon-element', IconElement);
