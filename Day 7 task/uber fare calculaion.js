class UberPriceCalculator {
  constructor(distance, time) {
    this.distance = distance;
    this.time = time;
    this.baseFare = 2.5;
    this.costPerMile = 1.5;
    this.costPerMinute = 0.25;
  }

  calculatePrice() {
    const distanceCost = this.distance * this.costPerMile;
    const timeCost = this.time * this.costPerMinute;
    const totalFare = this.baseFare + distanceCost + timeCost;
    return `Your Uber fare is $${totalFare.toFixed(2)}.`;
  }
}
