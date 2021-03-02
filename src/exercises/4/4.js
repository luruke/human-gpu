const BUFFERS = `{
  "data": [
    1.0, -0.5, 1.0, 0.1,
    1.0, -0.3, 1.0, 0.0,
    -0.5, 0.0, 4.0, 0.0
  ]
}`;

const ATTRIBUTES = `{
  "d": { "buffer": "data", "size": 4}
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute vec4 d;

void main() {
  gl_Position = vec4(vec3(0.0), 1.0);
  gl_Position.x = d.y - d.w;
  gl_Position.y = (d.x * d.z) / 2.0;
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const DISABLE = false;
const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0004 – vecfour?";
const TIPS = `Heeehe human goodmorning. How are you?
I want to mess up your brain a little bit,

Now go and draw one triangle!`;

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
