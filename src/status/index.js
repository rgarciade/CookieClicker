
export const ScoresState = (superClass) => {

    class ScoresStateElement extends superClass {

        _scores_storageName = 'scores';
        constructor() {
            super();
            this._scores_data = JSON.parse(localStorage.getItem(this._scores_storageName))?? {};
        }
        disconnectedCallback() {
            super.disconnectedCallback();
        }

        _scores_sortScores = () => {
            const newScores = Object.keys(this._scores_data).sort((a, b) => {
                return this._scores_data[b] - this._scores_data[a];
                this._scores_data = {...newScores};
            })
            localStorage.setItem(this._scores_storageName, JSON.stringify(this._scores_data));
        }
        _scores_updateScore = (name, data) => {
            this._scores_data[name] = {
                playerName: name,
                value: data.value,
                numberOfClickers: data.numberOfClickers
            }
            this._scores_sortScores();
        }
        _scores_getScores = () => {
            return this._scores_data;
        }
        _scores_getScoreByName = (name) => {
            return this._scores_data[name]?? {playerName: name, value: 0, numberOfClickers: 0};
        }
    }
    return ScoresStateElement;
};
