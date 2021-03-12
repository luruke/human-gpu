const BUFFERS = `{
  "data": [
    -0.5, -0.5, 0.0,
    0.0, 0.3, 0.0,
    0.5, 0.3, 0.5
  ]
}`;

const ATTRIBUTES = `{
  "aPosition": { "buffer": "data", "size": 3 }
}`;

const UNIFORMS = `{
  "uTranslate": [0.0, 0.0, 0.0],
  "uScale": [1.0, 1.0, 1.0],
  "uRotationX": 0.0,
  "uRotationY": 0
}`;

const VERTEX = `attribute vec3 aPosition;
uniform vec3 uTranslate;
uniform vec3 uScale;
uniform float uRotationX;
uniform float uRotationY;

void main() {
  vec3 position = aPosition;

  // position.y = (cos(uRotationX) * position.y) - (sin(uRotationX) * position.z);
  // position.z = (sin(uRotationX) * position.y) + (cos(uRotationX) * position.z);

  position -= 0.5;
  position.x = (cos(uRotationY) * position.x) + (sin(uRotationY) + sin(uRotationY) * position.z);
  position.z = (-sin(uRotationY) * position.x) + (cos(uRotationY) * position.z);
  position += 0.5;

  gl_Position = vec4(position, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0013 – three dimensions?";
const TIPS = `

I know you don't have a lot of compute power...To simplify i will make you to only rotate x

Let me see..draw me a triangle!`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 1 * 3);
};

var style = document.createElement("style");
style.innerHTML = `
.box {
  width: 400px;
}

.canvas {
  width: 90mm;
  height: 90mm;
}
`;
document.head.appendChild(style);
