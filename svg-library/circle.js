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
circle.createCircle(...attr);
// const circle = document.querySelector("circle");
// const radius = circle.getAttribute("r");
// const circumference = 2 * radius * Math.PI;
// console.log(circumference);
// circle.setAttribute("stroke-dasharray", `${circumference}`);
// console.log(circle.getAttribute("stroke-dasharray"));
