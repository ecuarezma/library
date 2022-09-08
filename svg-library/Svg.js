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
}
