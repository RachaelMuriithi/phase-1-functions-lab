// Code your solution in this file!
function distanceFromHqInBlocks (pickuplocation) {
    const scuberHq = 42
    const distance =  Math.abs(scuberHq - pickuplocation);
    return distance
}
results = distanceFromHqInBlocks()

function distanceFromHqInFeet (pickuplocation) {
    const scuberHq = 42 * 264;
    const inFeet = Math.abs (scuberHq - (pickuplocation *264));
    return inFeet;
}
function distanceTravelledInFeet(scuberHq, pickuplocation) {
    const dist = Math. abs (pickuplocation - scuberHq);
    return dist * 264
}
distanceTravelledInFeet();

function calculatesFarePrice(scuberHq, pickuplocation) {
    if (Math.abs((pickuplocation - scuberHq) * 264) <= 400) {
      return 0;
    } else if (
      Math.abs((pickuplocation - scuberHq) * 264) > 400 &&
      Math.abs((pickuplocation - scuberHq) * 264) <= 2000
    ) {
      return ((Math.abs((pickuplocation - scuberHq) * 264) - 400) * 2) / 100;
    } else if (Math.abs((pickuplocation - scuberHq) * 264) > 2000 && Math.abs((pickuplocation - scuberHq) * 264) <= 2500) {
      return 25;
    } else if (Math.abs((pickuplocation - scuberHq) * 264) >= 2500) {
      return "cannot travel that far";
    }
  }
  calculatesFarePrice(34, 24);
  