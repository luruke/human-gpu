const BUFFERS = {
  data1: [0.0, 1.0, 2.0],
};

const ATTRIBUTES = {
  index: { buffer: "data1", size: 1 }, // stride, offset
};

const UNIFORMS = {};

const VERTEX = `
attribute float index;

void main() {
  if (index == 0.0) {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  }

  if (index == 1.0) {
    gl_Position = vec4(0.0, 0.5, 0.0, 1.0);
  }

  if (index == 2.0) {
    gl_Position = vec4(0.7, 0.0, 0.0, 1.0);
  }
}
`;

const FRAGMENT = `
precision highp float;

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;
