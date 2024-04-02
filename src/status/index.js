export const ScoresState = (superClass) => {
	class ScoresStateElement extends superClass {
		_scores_storageName = 'scores';
		constructor() {
			super();
			this._scores_data =
				JSON.parse(localStorage.getItem(this._scores_storageName)) ?? {};
		}
		disconnectedCallback() {
			super.disconnectedCallback();
		}
		_formatNumber(num) {
			if (num >= 1e6) {
				return (num / 1e6).toFixed(2) + ' million';
			} else if (num >= 1e3) {
				return (num / 1e3).toFixed(2) + 'k';
			} else {
				return num.toString();
			}
		}
		_scores_sortScores = () => {
			const newScores = Object.keys(this._scores_data)
				.sort((a, b) => {
					return this._scores_data[b].value - this._scores_data[a].value;
				})
				.map((name) => {
					this._scores_data[name].value = this._formatNumber(
						this._scores_data[name].value
					);
					return this._scores_data[name];
				});
			return newScores;
		};
		_scores_updateScore = (name, data) => {
			this._scores_data[name] = {
				playerName: name,
				value: data.value,
				numberOfClickers: data.numberOfClickers,
			};
			localStorage.setItem(
				this._scores_storageName,
				JSON.stringify(this._scores_data)
			);
		};
		_scores_getScores = () => {
			return this._scores_data;
		};
		_scores_getScoresSorted = () => {
			return this._scores_sortScores();
		};
		_scores_getScoreByName = (name) => {
			return (
				this._scores_data[name] ?? {
					playerName: name,
					value: 0,
					numberOfClickers: 0,
				}
			);
		};
	}
	return ScoresStateElement;
};
