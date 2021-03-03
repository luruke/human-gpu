const BUFFERS = `{
  "data": [
    -0.5, -0.5, -0.5, 0.5, 0.5, -0.5,
    -0.5, 0.5, 0.5, 0.5, 0.5, -0.5
  ]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "data", "size": 2 }
}`;

const UNIFORMS = `{
  "offset": [0.1, 0.5],
  "stretch": 0.5
}`;

const VERTEX = `attribute vec2 position;
uniform vec2 offset;
uniform float stretch;

void main() {
  vec2 pos = position;
  pos += offset;
  pos.y += pos.x * stretch;

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

Like attributes, you can have multiple uniforms in your shader.

Draw me 2 trianglessss, c'mon.

In case you are wondering...What's happening when a vertex goes outside the NDC range?

We just draw it at the edge human!
Basically we clamp and make sure values are always -1 and +1.`;

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
