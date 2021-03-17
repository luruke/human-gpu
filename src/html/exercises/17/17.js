const BUFFERS = `{
  "position": [
    -0.8, 0.2,
    0.8, 0.2,
    0.8, -0.2,
    -0.8, -0.2
  ],
  "uv": [
    0.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0
  ],
  "_index": [
    0, 1, 2,
    0, 3, 2
  ]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "position", "size": 2 },
  "uv": { "buffer": "uv", "size": 2 }
}`;

const UNIFORMS = `{
  "uRed": [1.0, 0.0, 0.0],
  "uBlack": [0.0, 0.0, 0.0],
  "uBlue": [0.0, 0.0, 1.0]
}`;

const VERTEX = `attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const SHOW_PIXELS = true;
const FRAGMENT = `precision highp float;
varying vec2 vUv;
uniform vec3 uRed;
uniform vec3 uBlack;
uniform vec3 uBlue;

void main() {
  vec3 color = uRed;

  if (vUv.x > 0.5) {
    color = uBlue;
  }

  if (vUv.x > 0.75) {
    color = uBlack;
  }

  gl_FragColor = vec4(color, 1.0);
}`;

const HIDE_FRAGMENT = false;
const TITLE = "Human GPU #0017 - UV?";
const TIPS = `Varyings are cool, don't you agree?

Ever heard of UV and UV maps?
Here's a little taste of them!

Draw two triangle and colour them!`;

const RUN = (gl) => {
  // gl.drawArrays(gl.TRIANGLES, 0, 1 * 3);
  gl.drawElements(gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0);
};

var style = document.createElement("style");
style.innerHTML = `
.box {
  width: 350px;
}

.canvas {
  width: 80mm;
  height: 80mm;
}
`;
document.head.appendChild(style);
