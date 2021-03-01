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
I always did your dirty job, all those math
and repetitive tasks. I have enough!
Now it's your turn.

I'll explain you what to do. On the right you
have the framebuffer. You have to draw in there,
once we finished we can show that frame on the screen.

But quick! we just have 16 milliseconds
if we want to run at 60fps!

Following you find all the information to draw that frame.

Let me you introduce the *Buffers*:
- they are just data!
`;

var style = document.createElement("style");
style.innerHTML = `
.box-uniforms {
  display: none;
}

.canvas {
  width: 160mm;
  height: 160mm;
}
`;
document.head.appendChild(style);
