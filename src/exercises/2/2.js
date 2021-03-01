const BUFFERS = `{
  data1: [0.0, 0.0, 0.0, 0.5, 0.5, 0.7],
}`;

const ATTRIBUTES = `{
  pos: { buffer: "data1", size: 2 }, // stride, offset
}`;

const UNIFORMS = `{}`;

const VERTEX = `
attribute vec2 pos;

void main() {
  gl_Position = vec4(pos * 2.0, 0.0, 1.0);
}
`;

const FRAGMENT = `
precision highp float;

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;
