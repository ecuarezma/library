class Circle extends Svg {
  constructor(radius, target) {
    super(target);
    this.radius = radius;
    this.circumference = 2 * this.radius * Math.PI;
  }
  createCircle(x = "0", y = "0") {
    this.createViewBox();
    let attr = `
    <circle
      r=${this.radius}
      cx=${x}
      cy=${y}
    />`;
    this.svgEl.innerHTML = attr;
  }
}

//test code
let circle = new Circle(25, ".target");
let attr = [50, 50];

let { circumference } = circle;
circle.createCircle(...attr);
let el = document.getElementById(`${circle.id}`).firstElementChild;
console.log(el);
el.setAttribute("stroke-dasharray", `${circumference.toFixed(2)}`);
let dashArrayVal = el.getAttribute("stroke-dasharray");
let dashOffsetVal = el.getAttribute("stroke-dasharray");
console.log(dashArrayVal - dashOffsetVal);
class Timer {
  start() {
    this.timerID = setInterval(this.tick, 10);
  }

  tick() {
    if (dashArrayVal > 0) {
      el.setAttribute("stroke-dashoffset", `${dashOffsetVal - dashArrayVal}`);
      dashArrayVal -= 0.5;
      console.log(dashArrayVal);
    } else {
      el.setAttribute("stroke-dashoffset", `${circumference}`);
      clearInterval(this.timerID);
    }
  }
}

let clock = new Timer();
