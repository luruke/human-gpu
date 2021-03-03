const BUFFERS = `{
  "data": [
    -4, 4,
    -7, -3,
    -2, 3,
    -2, 3,
    -1, -2,
    0, 3
  ]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "data", "size": 2 }
}`;

const UNIFORMS = `{
  "scale": 2.0
}`;

const VERTEX = `attribute vec2 position;
uniform float scale;

void main() {
  vec2 pos = position / 10.0;
  pos *= scale;
  pos += vec2(.5, 0.0);

  gl_Position = vec4(pos, 0.0, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0010 – Uniforms v2";
const TIPS = `W0w hum4n, that's already our gpu task n.10!

You really are a good apprentice, you remind me my great grandfather amiga GPU v.01.


`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 2 * 3);
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
