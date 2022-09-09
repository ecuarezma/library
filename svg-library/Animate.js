// class Animate {
//   start() {
//     this.timerID = setInterval(this.tick, 10);
//   }

//   tick() {
//     if (dashArrayVal > 0) {
//       el.setAttribute("stroke-dashoffset", `${dashOffsetVal - dashArrayVal}`);
//       dashArrayVal -= 0.5;
//       console.log(dashArrayVal);
//     } else {
//       el.setAttribute("stroke-dashoffset", `${circumference}`);
//       clearInterval(this.timerID);
//     }
//   }
// }

class Timer {
  constructor(duration) {
    this.duration = duration;
    this.timeRemaining = duration;
    this.circle = document.querySelector("circle");
  }
  start = () => {
    this.onTick();
    this.timerID = setInterval(this.onTick, 20);
    console.log(`start at ${this.duration}`);
  };
  onTick = () => {
    console.log(
      `${this.timeRemaining.toFixed(2)} seconds left of ${this.duration}`
    );
    const radius = this.circle.getAttribute("r");
    let circleP = 2 * radius * Math.PI;
    if (this.timeRemaining <= 0) {
      this.stop();
    } else {
      //perimeter * timeRemaining / duration - perimeter
      this.circle.setAttribute(
        "stroke-dashoffset",
        (circleP * this.timeRemaining) / this.duration - circleP
      );
      this.timeRemaining -= 0.02;
    }
  };
  stop = () => {
    clearInterval(this.timerID);
    console.log("stop");
  };
}
let test = new Timer(5);
