import  clickerTypes  from './clicker-types.js';

const loopTime = 100

export default class ClickerService {
    constructor({updateStatusFunction = () =>{}}) {
        this.updateStatusFunction = updateStatusFunction
        this.actualValue = 0
        this.numberOfClickers = 0
    }
    initialize({initialValue = 0, initialNumberOfClickers = 0}) {
        this.updateStatusFunction(this.actualValue)
        this.clickerLoop = this.initializeClickers()
        this.actualValue = initialValue
        this.numberOfClickers = initialNumberOfClickers
    }
    dismount() {
        clearInterval(this.clickerLoop)
    }
    initializeClickers() {
        return setInterval(() => {
            this.actualValue += this.numberOfClickers
            this.updateStatusFunction(this.actualValue)
        }, loopTime)
    }
    clickersTypes = {
        [clickerTypes.BasicAutoClicker] : {
            "name": clickerTypes.BasicAutoClicker,
            "price":  50,
            "incrementFunction": () => {
                this.numberOfClickers++
            }
        },
        [clickerTypes.MegaClickers] : {
            "name": clickerTypes.MegaClickers,
            "price":  1000,
            "incrementFunction": () => {
                this.numberOfClickers += 45
            }
        },
        [clickerTypes.SimpleClicker] : {
            "name": clickerTypes.SimpleClicker,
            "price":  0,
            "incrementFunction": () => this.actualValue ++
        },
    }
    checkClickerEnabled(clickerType) {
        const clicker = this.clickersTypes[clickerType]
        const actualClickerPieces = clicker.price * (this.numberOfClickers +1)
        return this.actualValue >= actualClickerPieces
    }
    nextClickerPrice(clickerType) {
        const clicker = this.clickersTypes[clickerType]
        return clicker.price * (this.numberOfClickers +1)
    }
    buyClicker(clickerType) {
        const clicker = this.clickersTypes[clickerType]
        const actualClickerPieces =  clicker.price * (this.numberOfClickers +1)
        if (this.actualValue >= actualClickerPieces) {
            this.actualValue -= actualClickerPieces
            clicker.incrementFunction()
        }
    }

}
