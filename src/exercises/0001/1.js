const BUFFERS = `{
  "data1": [0.0, 1.0, 2.0]
}`;

const ATTRIBUTES = `{
  "id": { "buffer": "data1", "size": 1 }
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute float id;

void main() {
  if (id == 0.0) {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  }

  if (id == 1.0) {
    gl_Position = vec4(0.0, 0.5, 0.0, 1.0);
  }

  if (id == 2.0) {
    gl_Position = vec4(0.7, 0.0, 0.0, 1.0);
  }
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;

const DISABLE = true;
const TITLE = "Human GPU #0001";
const TIPS = `Hello human, welcome to your first GPU exercise.
This one is pretty easy, just to warm up!`;

var style = document.createElement("style");
style.innerHTML = `
.box-uniforms {
  display: none;
}
`;
document.head.appendChild(style);
