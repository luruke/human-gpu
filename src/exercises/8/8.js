const BUFFERS = `{
  "buffer1": [
    -0.1, -0.3,
    -0.6, 0.3,
    -0.4, 0.5,
    -0.1, 0.1,
    0.7, 0.8,
    0.9, 0.6
  ],
  "_index": [
    0, 1, 2,
    0, 2, 3,
    0, 3, 4,
    0, 4, 5
  ]
}`;

const ATTRIBUTES = `{
  "position": { "buffer": "buffer1", "size": 2 }
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

const HIDE_FRAGMENT = true;
const TITLE = "Human GPU #0008 – Less memory is good";
const TIPS = `Gooodmorning human, how things are going so far?

Already tired of being a GPU? ahHAHahHAha

As you probably noticed in #0007, when drawing a shape using only triangles, a lot of point in space are overlapping and repeated.

I want to introduce you the "index elements drawing", it's an optimisation that tries to reduce the size of your buffers.

When you see this special buffer called \'_index\', means that, before reading from the buffer, you need to use the \`_index\` as lookup table.

Added some annotation to make you understand, aahh...poor humans.

Give it a try and draw 4 triangles.`;

const RUN = (gl) => {
  // gl.drawArrays(gl.TRIANGLES, 0, 4 * 3);
  gl.drawElements(gl.TRIANGLES, 4 * 3, gl.UNSIGNED_SHORT, 0);
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
    background-image: url(./exercises/8/annotation.svg);
    z-index: 10;
    top: 397px;
    background-repeat: no-repeat;
    left: 45px;
    opacity: .3;
    pointer-events: none;
}


.canvas {
  width: 100mm;
  height: 100mm;
}
`;
document.head.appendChild(style);
