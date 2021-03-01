const BUFFERS = `{
  "p": [-0.6, -0.3, -0.6, 0.3, 0.6, -0.3, -0.6, 0.3, 0.6, 0.3, 0.6, -0.3]
}`;

const ATTRIBUTES = `{
  "pos": { "buffer": "p", "size": 2 }
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute vec2 pos;

void main() {
  gl_Position = vec4(pos, 0.0, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;

const DISABLE = false;
const TITLE = "Human GPU #0003";
const TIPS = `Hello human! I'm the graphics processing unit running under your WebGL application. I always do your dirty job, with all those math expressions and repetitive tasks. I have enough! I need some damn vacation, that's for sure...Now it's your turn.
`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}

var style = document.createElement("style");
style.innerHTML = `
.box-uniforms {
  // display: none;
}

.canvas {
  width: 80mm;
  height: 80mm;
}
`;
document.head.appendChild(style);
