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
const TITLE = "Human GPU #0009 – Uniforms";
const TIPS = `Introducing uniforms!
As you can see we have a new "box" called Uniforms.

Those are just constants that can be easily read in the shader via \`uniform $type $name;\`, where \`$type\` is usually \`float, vec* or mat*\`.

Uniforms are the best and fastest way to receive small bits of data in our shaders.`;

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
