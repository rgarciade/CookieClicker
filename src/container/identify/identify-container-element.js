import { LitElement, html } from 'lit';
import '../../components/icon/icon-element.js';
import '../../components/button/button-element.js';
import { identifyStyle } from './identify-container-style.js';
import { commonStyle } from '../../styles/common.js';
import { ScoresState } from '../../status/index.js';

export class IdentifyContainerElement extends ScoresState(LitElement) {
	static get styles() {
		return [identifyStyle, commonStyle];
	}
	constructor() {
		super();
		this.gamerName = '';
		this.haveError = false;
	}
	getScoresHtml() {
		const scoresData = this._scores_getScoresSorted();
		if (scoresData.length === 0) return html`<p>No scores yet</p>`;

		const htmlList = Object.keys(scoresData)
			.slice(0, 4)
			.sort((a, b) => scoresData[b] - scoresData[a])
			.map((order) => {
				const score = scoresData[order].value;
				const name = scoresData[order].playerName;
				return html`<li>${name}: ${score}</li>`;
			});
		return html`<ol>
			${htmlList}
		</ol>`;
	}
	IsErrorName() {
		return this.haveError
			? html`<span class="error-span">*Escribe un nombre correcto</span>`
			: '';
	}

	render() {
		return html`
			<div class="title">
				<h2>
					<icon-element icon="star" class="icon-start"></icon-element>
					The Bests
				</h2>
			</div>

			<div class="container">
				<div class="bests">${this.getScoresHtml()}</div>
				${this.IsErrorName()}
				<input placeholder="Gamer Name" @input="${this._handleInput}" />
				<button-element
					class="play-button"
					text="Join game"
					@click="${this._joinGame}"
				>
					Play
				</button-element>
			</div>
		`;
	}

	_handleInput(event) {
		this.gamerName = event.target.value;
	}
	_joinGame() {
		if (!this.gamerName) {
			const oldVal = this.haveError;
			this.haveError = true;
			this.requestUpdate('haveError', oldVal);
			return;
		}
		// en game-container e usado otra forma de navegar, para probar varios conceptos
		this.dispatchEvent(
			new CustomEvent('router-navigate', {
				detail: '/game?name=' + encodeURIComponent(this.gamerName),
				bubbles: true,
				composed: true,
			})
		);
	}
}

window.customElements.define(
	'identify-container-element',
	IdentifyContainerElement
);
