class Rect extends Svg {
  constructor(width, height, target) {
    super(target);
    this.width = width;
    this.height = height;
    this.perimeter = 2 * (this.width + this.height);
  }
  createRect(x = 0, y = 0, rx = 0, ry = 0) {
    this.createViewBox();
    let attr = `
    <rect
      x=${x}
      y=${y}
      width=${this.width}
      height=${this.height}
      rx = ${rx}
      ry = ${ry}
    />`;
    this.svgEl.innerHTML = attr;
  }
}
//test code
let rect = new Rect(50, 50, ".target");
rect.createRect(25, 25);
