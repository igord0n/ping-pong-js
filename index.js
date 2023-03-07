const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const lineWidth = 15;
const lineHeight = 200;


const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    ctx.fillStyle = "#286047";
    ctx.fillRect(0, 0, this.w, this.h);
  },
};

const line = {
  w: lineWidth,
  h: field.h,
  draw: function () {
    ctx.fillStyle = "#ffffff";

    const xCord = field.w / 2 - this.w / 2;
    const yCord = 0;
    const wid = this.w;
    const hei = field.h;

    ctx.fillRect(xCord, yCord, wid, hei);
  },
};

const raqLeft = {
  w: lineWidth,
  h: lineHeight,
  draw: function () {
    const xRaqL = 2 * line.w;
    const yRaqL = field.h / 2 - lineHeight / 2;
    const widRaqL = lineWidth;
    const heiRaqL = lineHeight;

    ctx.fillRect(xRaqL, yRaqL, widRaqL, heiRaqL);
  },
};

const raqRight = {
  w: lineWidth,
  h: lineHeight,
  draw: function () {
    const xRaqR = field.w - 2 * line.w;
    const yRaqR = field.h / 2 - lineHeight / 2;
    const widRaqR = lineWidth;
    const heiRaqR = lineHeight;

    ctx.fillRect(xRaqR, yRaqR, widRaqR, heiRaqR);
  },
};

const placar = {
  human: 0,
  computer: 0,
  draw: function () {
    ctx.font = "bold 72px arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#01341D";
    ctx.fillText(this.human, window.innerWidth / 4, 50);
    ctx.fillText(this.computer, window.innerWidth / 4 + window.innerWidth / 2, 50)
  },
};

const ball = {
  x: 100,
  y: 100,
  r: 22,
  speed: 10,
  _move: function () {
    this.x += 1 * this.speed;
    this.y += 1 * this.speed;
  },
  draw: function () {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fill();
    this._move();
  },
};

function setup() {
  canvas.width = field.w;
  canvas.height = field.h;
  ctx.width = field.w;
  ctx.height = field.h;
};

function draw() {
  field.draw();
  line.draw();
  raqLeft.draw();
  raqRight.draw();
  placar.draw();
  ball.draw();
};

window.animateFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60)
    }
  )
})();

function main() {
  animateFrame(main);
  draw();
}

setup();
main();