const BUFFERS = `{
  "buffer1": [
    -6, 3, 0, -8, -4, 5,
    0, -8, -4, 5, -1, 4,
    -1, 4, 0, -8, 2, 5,
    0, -8, 2, 5, 5, 4
  ]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "buffer1", "size": 2 }
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute vec2 position;

void main() {
  gl_Position = vec4(position / 10.0, 0.0, 1.0);
  gl_Position.y = max(-0.5, gl_Position.y);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0007 – Do you love GPU?";
const TIPS = `Hey human, long time no see you...can you draw for me 4 triangles?

In GLSL there are some built-in functions, like \`max\`, which returns the larger of the two arguments.`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 4 * 3);
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
