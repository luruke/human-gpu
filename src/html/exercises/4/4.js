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

vec2 position() {
  return vec2(
    d.y - d.w,
    (d.x * d.z) / 2.0
  );
}

void main() {
  gl_Position = vec4(vec3(0.0), 1.0);
  gl_Position.xy = position();
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0004 – Vecfour?";
const TIPS = `Heeehe human goodmorning. How are you?
I want to mess up your brain a little bit...

In GLSL you can create your own functions, like the \`vec2 position\` in this case.

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
