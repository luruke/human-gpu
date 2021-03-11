const BUFFERS = `{
  "p": [-0.6, -0.3, -0.6, 0.3, 0.6, -0.3, -0.6, 0.3, 0.6, 0.3, 0.6, -0.3]
}`;

const ATTRIBUTES = `{
  "pos": { "buffer": "p", "size": 2 }
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute vec2 pos;

void main() {
  vec2 newPos = pos * 1.5;
  gl_Position = vec4(newPos, 0.0, 1.0);
  
  // gl_Position = vec4(newPos.xy, 0.0, 1.0);
  // gl_Position = vec4(newPos.x, newPos.y, 0.0, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0003 – Only triangle?";
const TIPS = `Hello again human. I guess you're wondering...how do we draw other stuff then just triangles?

We can actually "combine" triangles together and draw any kind of stuff!

To make things more interesting, before using our attribute data, we are doing a small multiplication. Can you do multiplication human?

You see that I've added two alternative version of assigning our \`gl_Position\` variable. In GLSL types have some special property like swizzle (you can google \`swizzle glsl\` human).

You also see that we multiply a vec2 with a number, that's also possible with the glsl compiler, and with human brain glsl compiler as well.

Multiplying a vec2 (or any vec*) with a scalar (fancy name for a number) results in multiplying each vec component.

Example,
\`vec3(3, 9, 4) * 2 = vec3(6, 18, 8)\`,
\`vec2(2, 3) * 3 = vec3(6, 9)\`


Now go and draw *TWO* triangles!`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 6);
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
