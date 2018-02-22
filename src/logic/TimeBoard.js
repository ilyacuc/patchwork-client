export default class TimeBoard {
    constructor({ moneyBreakPoints, tilesBreakPoints, timeBoardLength }) {
        this.tilesBreakPoints = [...tilesBreakPoints];
        this.moneyBreakPoints = moneyBreakPoints;
        this.timeBoardLength = timeBoardLength;
    }

    checkMoneyBb(prevPos, nextPos) {
        const firstBpIndex = this.moneyBreakPoints.findIndex(bp => bp > prevPos);
        const secondBpIndex = this.moneyBreakPoints.findIndex(bp => bp > nextPos);
        return secondBpIndex > firstBpIndex;
    }

    checkTileBb(prevPos, nextPos) {
        const firstBpIndex = this.tilesBreakPoints.findIndex(bp => bp > prevPos);
        const secondBpIndex = this.tilesBreakPoints.findIndex(bp => bp > nextPos);
        if (secondBpIndex > firstBpIndex) {
            this.tilesBreakPoints.splice(firstBpIndex, 1);
            return true;
        }
        return false;
    }
}