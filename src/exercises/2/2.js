const BUFFERS = `{
  "data": [-0.5, -0.5, 0.0, 0.5, 0.5, -0.5]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "data", "size": 2 }
}`;

const UNIFORMS = `{}`;

const VERTEX = `attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT = `precision highp float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const DISABLE = true;
const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0002 – Position attribute";
const TIPS = `Wow man...you took AAAAGEEES to draw that first triangle...hopefully you will draw faster this time.

This time our attribute read two values at the time from our buffer, so it's a \`vec2\`. Attributes can be of type \`float, vec2, vec3, vec4\`.

Even if you have a human brain, you can easily understand that float = 1 value, vec2 = 2 values, vec3 = 3 values...

Just so you know, in our exercises we're going to use GLSL ES version 1.0 that ships with WebGL 1.0.

Now go, and draw me a triangle! Quick! Quick!`;

const RUN = (gl) => {
  gl.drawArrays(gl.TRIANGLES, 0, 3);
};

var style = document.createElement("style");
style.innerHTML = `
.box {
  width: 400px;
}

main::after {
  content: '';
    display: block;
    position: absolute;
    width: 300px;
    height: 300px;
    background-image: url(./exercises/2/annotation.svg);
    z-index: 10;
    top: 316px;
    background-repeat: no-repeat;
    left: 32px;
    opacity: .3;
    pointer-events: none;
}

.canvas {
  width: 140mm;
  height: 140mm;
}
`;
document.head.appendChild(style);
