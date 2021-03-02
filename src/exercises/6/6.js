const BUFFERS = `{
  "buffer1": [
    -0.4, -0.2, 0.2, 0.8, 0.3, -0.9,
    -0.2, 0.4, 0.0,
    1.0, 1.0, 0.5
  ]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "buffer1", "size": 2, "offset": 0 },
  "offset": { "buffer": "buffer1", "size": 1, "offset": 6 },
  "scale": { "buffer": "buffer1", "size": 1, "offset": 9 }
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

const DISABLE = false;
const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0006 – buffer + attribute pr0 l337";
const TIPS = `Multiple attribute can read from the same buffer, like in this example.

You see that each attribute now has the \`offset\` property, means that will start reading from the buffer at index + offset.

(To help you out human, i've formatted the buffer so that it's easier for you to read)

Together with \`offset\`, attributes have other property like:
- type (in our exericises, we'll just use \`gl.FLOAT\`)
- normalized (true/false)
- stride

To be honest, it's bit rare for us GPU to see offset/stride used out in the while.
Most of the time, one buffer is "linked" to one attribute.
So don't worry too much.

Buffer too can have different property, like:
- bind target (ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER)
- usage (like STATIC_DRAW, DYNAMIC_DRAW)


Heya human, by now you should well understand how the relationship between buffer and attributes works.
`;

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
