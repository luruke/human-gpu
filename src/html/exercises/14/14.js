const BUFFERS = `{
  "data": [
    -0.5, -0.5, 2.0, -0.5, 0.5, 2.0,
    0.5, 0.5, 1.0, -0.5, -0.5, 2.0,
    0.5, -0.5, 1.0, 0.5, 0.5, 1.0
  ]
}`;

const ATTRIBUTES = `{ "aPosition": { "buffer": "data", "size": 3 } }`;

const UNIFORMS = `{ "uColor": [1.0, 0.0, 0.0] }`;

const VERTEX = `attribute vec3 aPosition;

void main() {
  gl_Position = vec4(aPosition.xy, 0.0, aPosition.z);
}`;

const SHOW_PIXELS = true;
const FRAGMENT = `precision highp float;
uniform vec3 uColor;

void main() {
  gl_FragColor = vec4(uColor.rgb, 1.0);
}`;

const HIDE_FRAGMENT = false;
const TITLE = "Human GPU #0014 – Filling pixels";
const TIPS = `Ok, so, you like painting and filling squares, human?

Our previous square in #0013 was 30x30px, and it filled a surface of 900 pixels.

The fragment shader then, was executed (in your mind) 900 times, against the 6 time execution of the vertex shader.

Few more things about fragment shader:

Don't pay too much attention to the \`precision highp float;\`, fragment shader lacks of default precision format, so we must specify one.

The RGBA values expressed in gl_FragColor spans from 0 to 1.
For instance \`rgb(233, 10, 30)\` will be expressed as \`vec3(233.0 / 255.0, 10.0 / 255.0, 30.0 / 255.0)\`

The fragment shader can access to uniforms, like the vertex shader does.

Draw two triangles, and fill them!
`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 2 * 3);
  // gl.drawElements(gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0);
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
