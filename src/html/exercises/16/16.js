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
const TITLE = "Human GPU #0016 – Varyings";
const TIPS = `How do we draw something more interesting then just a plain color?

How do we can get some sort of variables/dynamic thing in the fragment shader so to add some logic?
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
