const BUFFERS = `{
  "data": [
    -0.75, -0.8,
    0.5, 0.5,
    0.5, -0.5
  ]
}`;

const ATTRIBUTES = `{ "aPosition": { "buffer": "data", "size": 2 } }`;

const UNIFORMS = `{ "uColor": [1.0, 1.0, 0.0] }`;

const VERTEX = `attribute vec2 aPosition;

void main() {
  gl_Position = vec4(aPosition.xy, 0.0, 1.0);
}`;

const SHOW_PIXELS = true;
const FRAGMENT = `precision highp float;
uniform vec3 uColor;

void main() {
  gl_FragColor = vec4(uColor.rgb, 1.0);
}`;

const HIDE_FRAGMENT = false;
const TITLE = "Human GPU #0015 – Half pixel?";
const TIPS = `Hey human...you probably wondered, what happens when a triangle fills just a part of a pixel?
We need to fill it or not?

The phyical led, in fact, can have just one color! no cheating on that.

Either you fill it completely or not.

So, how do we get sharp and and nice-looking shapes on a finite number of pixel then?

Short answer, you can't, but there are some tricks you can put in place...you probably heard of a thing called "antialiasing", don't you?

We won't dive into it, as I'm pretty sure your calculation power is pretty limited...
`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 1 * 3);
  // gl.drawElements(gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0);
};

var style = document.createElement("style");
style.innerHTML = `
.box {
  width: 400px;
}

.canvas {
  width: 100mm;
  height: 100mm;
}
`;
document.head.appendChild(style);
