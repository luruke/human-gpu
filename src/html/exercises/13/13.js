const BUFFERS = `{
  "data": [
    -0.5, 0.5, 0.0,
    0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
  ],
  "_index": [
    3, 0, 1,
    1, 2, 3
  ]
}`;

const ATTRIBUTES = `{
  "aPosition": { "buffer": "data", "size": 3 }
}`;

const UNIFORMS = `{
  
}`;

const VERTEX = `attribute vec3 aPosition;

void main() {
  gl_Position = vec4(aPosition, 1.0);
}`;

const SHOW_PIXELS = true;
const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = false;
const TITLE = "Human GPU #0013 – Fragment shader";
const TIPS = `hello! let's talk about the elephant in the room. Introducing you the *Fragment Shader*!

Until now, you only did half of the job, completing just a part of the real WebGL pipeline.

Drawing the triangles, in the way we did, is generally called Shape or Primitive Assembly. We worked in a theorethical vectorial space, without taking into account the actual screen resolution.

After drawing our triangles, we need to "project" our shapes to a pixel grid. This phase is called rasterization.

The frame buffer where we are drawing has in fact a well defined resolution.
`;

const RUN = (gl) => {
  // gl.drawArrays(gl.TRIANGLES, 0, 2 * 3);
  gl.drawElements(gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0);
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
