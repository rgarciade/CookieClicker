import { LitElement, html } from 'lit';
import '../components/button-element.js';
import { gameStyle } from './styles/game-container-style.js';
import { commonStyle } from '../styles/common.js';
import ClickerService from '../services/clicker/clicker-service.js';
import clickerTypes from '../services/clicker/clicker-types.js';
import '../components/nav-element.js';
import { ScoresState } from '../status/index.js';

export class GameContainerElement extends ScoresState(LitElement) {
	static get styles() {
		return [gameStyle, commonStyle];
	}
	/**
	 * @property {String} name - The name of the gamer.
	 */
	static get properties() {
		return {
			name: { type: String },
		};
	}
	_initPlayerData() {
		if (this.name == '') return;
		let playerData = this._scores_getScoreByName(this.name);
		this.clicker.initialize({
			initialValue: playerData.value,
			initialNumberOfClickers: playerData.numberOfClickers,
		});
	}
	_updateClickerActualValue() {
		const oldVal = this.counterValue;
		this.counterValue = this.clicker.actualValue;
		this.requestUpdate('counterValue', oldVal);
		if (oldVal !== this.counterValue) {
			this._scores_updateScore(this.name, {
				value: this.clicker.actualValue,
				numberOfClickers: this.clicker.numberOfClickers,
			});
		}
	}
	_updateClickerActualClickerPrice() {
		const oldVal = this.actualClickerPrice;
		this.actualClickerPrice = this.clicker.nextClickerPrice(
			clickerTypes.BasicAutoClicker
		);
		this.requestUpdate('actualClickerPrice', oldVal);
	}
	_updateClickerBasicAutoClickerEnabled() {
		const oldVal = this.basicAutoClickerEnabled;
		this.basicAutoClickerEnabled = this.clicker.checkClickerEnabled(
			clickerTypes.BasicAutoClicker
		);
		this.requestUpdate('basicAutoClickerEnabled', oldVal);
	}

	_updateClickerMegaClickersActualClickerPrice() {
		const oldVal = this.megaClickersActualClickerPrice;
		this.megaClickersActualClickerPrice = this.clicker.nextClickerPrice(
			clickerTypes.MegaClickers
		);
		this.requestUpdate('megaClickersActualClickerPrice', oldVal);
	}
	_updateClickerMegaClickersEnabled() {
		const oldVal = this.megaClickersEnabled;
		this.megaClickersEnabled = this.clicker.checkClickerEnabled(
			clickerTypes.MegaClickers
		);
		this.requestUpdate('megaClickersEnabled', oldVal);
	}

	constructor() {
		super();
		this.actualClickerPrice = 0;
		this.counterValue = 0;
		this.basicAutoClickerEnabled = false;

		this.megaClickersActualClickerPrice = 0;
		this.megaClickersEnabled = false;

		this.clicker = new ClickerService({
			updateStatusFunction: () => {
				this._updateClickerActualValue();
				this._updateClickerActualClickerPrice();
				this._updateClickerBasicAutoClickerEnabled();
				this._updateClickerMegaClickersActualClickerPrice();
				this._updateClickerMegaClickersEnabled();
			},
		});
	}
	disconnectedCallback() {
		// es importante destruir el servicio clicker
		//  para que no siga con el setInterval
		this.clicker.dismount();
		super.disconnectedCallback();
	}
	update(changedProperties) {
		super.update(changedProperties);
		if (!changedProperties.has('name')) return;
		this._initPlayerData();
	}

	addOne() {
		this.clicker.buyClicker(clickerTypes.SimpleClicker);
	}
	buyClicker() {
		this.clicker.buyClicker(clickerTypes.BasicAutoClicker);
	}
	buyMegaClicker() {
		this.clicker.buyClicker(clickerTypes.MegaClickers);
	}
	render() {
		return html`
			<nav-element href="/identify">change player</nav-element>

			<div class="container">
				<p class="game-text">
					Merge Pull Request: <span>${this.counterValue}</span>
				</p>
				<button-element @click="${this.addOne}" width="10em">
					<icon-element icon="merge_type" size="50px"></icon-element>
					Add 1
				</button-element>
				<div class="auto-clicker-group">
					<button-element
						?disabled="${!this.basicAutoClickerEnabled}"
						@click="${this.buyClicker}"
						width="8.5em"
						fontSize="1em"
					>
						<icon-element icon="merge_type" size="50px"></icon-element>
						Add clicker: ${this.actualClickerPrice}
					</button-element>
					<button-element
						?disabled="${!this.megaClickersEnabled}"
						@click="${this.buyMegaClicker}"
						width="10em"
						fontSize="1em"
					>
						<icon-element icon="merge_type" size="50px"></icon-element>
						Add Mega clicker: ${this.megaClickersActualClickerPrice}
					</button-element>
				</div>
			</div>
		`;
	}
}

customElements.define('game-container-element', GameContainerElement);
