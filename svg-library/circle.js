class Circle extends Svg {
  constructor(radius, target) {
    super(target);
    this.radius = radius;
    this.perimeter = 2 * this.radius * Math.PI;
    //yes it's technically circumference but then it won't work with reusable codeeeeeeee...
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
circle.createAnimation(5);
