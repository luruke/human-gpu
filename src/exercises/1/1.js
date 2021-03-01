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
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const DISABLE = false;
const TITLE = "Human GPU #0001";
const TIPS = `Hello human! I'm the graphics processing unit running under your WebGL application. I always do your dirty job, with all those math expressions and repetitive tasks. I have enough! I need some damn vacation, that's for sure...Now it's your turn.

Don't worry, I'll explain you what to do step by step. On the right you have a grid with the framebuffer. Your job is to to draw the final frame.

Following you'll find all the information you need to draw that frame.

Let me you introduce the *Buffers*:
- It's super simple, they are just raw data!
- Usually they are just a big array containing \`float\` values

ahh, then we have the dears *Attributes*:
- They are the "pointer|interface" that lets you read from buffers

In this example, we have one attribute called \`id\` that lets you read from \`data1\` one element at the time.

Then we have the two *Shaders*, small GLSL programs that you will be using to draw the shape and color our final image.

Still confused? right...it's your first time...ok

In this case, the v

Once you finish to draw you can send it on the screen and show the final image to the user.
But be quick! We just have 16 milliseconds!

That being said, you should have everything you need, now go and draw \`1 triangle\`!
If you don't know human, a triangle have 3 points (or vertices).
`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

var style = document.createElement("style");
style.innerHTML = `
.box-uniforms {
  // display: none;
}

.canvas {
  width: 80mm;
  height: 80mm;
}
`;
document.head.appendChild(style);
