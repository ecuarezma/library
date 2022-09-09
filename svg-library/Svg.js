class Svg {
  constructor(target = "body") {
    this.target = target;
    this.id = Math.floor(Math.random() * 1000);
    const svgURI = "http://www.w3.org/2000/svg";
    this.svgEl = document.createElementNS(svgURI, "svg");
  }
  createViewBox(yPos = 0, xPos = 0, width = 100, height = 100) {
    const el = document.querySelector(this.target);
    this.svgEl.setAttribute("viewBox", `${yPos} ${xPos} ${width} ${height}`);
    this.svgEl.setAttribute("id", this.id);
    el.appendChild(this.svgEl);
  }
  //animation controls
  createAnimation(duration) {
    this.element = this.svgEl.firstElementChild;
    this.element.setAttribute("stroke-dasharray", this.perimeter);
    this.duration = duration;
    this.timeRemaining = duration;
    this.start();
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
    // const radius = this.circle.getAttribute("r");
    // let circleP = 2 * radius * Math.PI;
    if (this.timeRemaining <= 0) {
      this.element.setAttribute("stroke-dashoffset", this.perimeter);
      this.stop();
    } else {
      //perimeter * timeRemaining / duration - perimeter
      this.element.setAttribute(
        "stroke-dashoffset",
        -(this.perimeter * this.timeRemaining) / this.duration - this.perimeter
      );
      this.timeRemaining -= 0.02;
    }
  };
  stop = () => {
    clearInterval(this.timerID);
    console.log("stop");
  };
}
