class Animate {
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
