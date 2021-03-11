const BUFFERS = `{
  "data": [
    -0.1, -0.1, -0.2, 0.2, 0.1, 0.2
  ]
}`;

const ATTRIBUTES = `{
  "aPosition": { "buffer": "data", "size": 2 }
}`;

const UNIFORMS = `{
  "uOffset": [0.1, -0.2]
}`;

const VERTEX = `attribute vec2 aPosition;
uniform vec2 uOffset;

const float multiplier = 2.0;

vec2 getPosition() {
  vec2 p = aPosition;

  for (int i = 0; i < 2; i++) {
    p *= multiplier;
  }

  p += uOffset;

  return p;
}

void main() {
  vec2 pos = getPosition();

  gl_Position = vec4(pos, 0.0, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0011 – GLSL";
const TIPS = `What's up bro?
new little task for you.

GLSL is a subset of C language, it has all the common things you can expect from a C-like languages. (\`for, while, if, else\`)
You see that is common for other humans like you to name attributes and uniforms with their type as prefix, like \`aVariable\` or \`uVariable\`...humans are so werid man...

Draw me a triangle for me?`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 1 * 3);
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
