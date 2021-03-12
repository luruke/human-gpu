const BUFFERS = `{
  "data": [
    -0.5, 0.0, 0.0,
    0.5, 0.0, 0.0,
    0.5, 0.0, 0.5,
  ]
}`;

const ATTRIBUTES = `{
  "aData": { "buffer": "data", "size": 3 }
}`;

const UNIFORMS = `{
  "uDepth": 0.4
}`;

const VERTEX = `attribute vec3 aData;
uniform float uDepth;

void main() {
  vec2 pos = aData.xy;

  // projection * view * model * position

  // projection 3d to ncd
  // view transpose from camera
  // model local object transformation
  
  gl_Position = vec4(pos, uDepth, aData.z);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0013 – three dimensions?";
const TIPS = `Let me see..draw me a triangle!`;

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
