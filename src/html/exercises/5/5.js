const BUFFERS = `{
  "buffer1": [-0.4, -0.4, 0.4, 0.4, 0.5, -0.3],
  "buffer2": [-0.4, 0.2, 0.0],
  "buffer3": [1.0, 1.5, 0.5]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "buffer1", "size": 2 },
  "offset": { "buffer": "buffer2", "size": 1 },
  "scale": { "buffer": "buffer3", "size": 1 }
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute vec2 position;
attribute vec2 offset;
attribute float scale;

void main() {
  vec2 p = vec2(position);
  p += offset;
  p *= scale;

  gl_Position = vec4(p, 0.0, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0005 – Multiple attributes";
const TIPS = `Heya human, of course you can have multiple attributes and buffers, like in this example.

It's up to our app how to structure and deliver data to our vertices.

Now draw me a triangle, human!`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 3);
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
