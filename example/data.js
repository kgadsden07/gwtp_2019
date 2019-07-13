//All: 
//animation: "scramble", "rotate", "hueChange", "none"
//shape: star, circle, triangle, square
//size: 1-5
//number
//sound
//color

//Star:
//points

var secretCode = "cat";
var firstLastName = "Andrew Dame";

var keyData = {
    q: {
        sound: new Howl({
          src: ['../sounds/bubbles.mp3']
        }),
        color: '#1abc9c',
        shape: "star",
        size: 3,
        number: 5,
        animation: "scramble",
        points: 6

    },
    w: {
        sound: new Howl({
          src: ['../sounds/clay.mp3']
        }),
        color: '#2ecc71',
        shape: "circle",
        size: 5,
        number: 1,
        animation: "rotate"
    },
    e: {
        sound: new Howl({
          src: ['../sounds/confetti.mp3']
        }),
        color: '#3498db',
        shape: "triangle",
        size: 2,
        number: 6,
        animation: "hueChange"
    },
    r: {
        sound: new Howl({
          src: ['../sounds/corona.mp3']
        }),
        color: '#9b59b6',
        shape: "star",
        size: 2,
        number: 8,
        points: 7,
        animation: "none"
    },
        t: {
        sound: new Howl({
          src: ['../sounds/dotted-spiral.mp3']
        }),
        color: '#34495e',
        shape: "triangle",
        size: 5,
        number: 1,
        animation: "rotate"
    },
    y: {
        sound: new Howl({
          src: ['../sounds/flash-1.mp3']
        }),
        color: '#16a085',
        shape: "square",
        size: 2,
        number: 10,
        animation: "none"
    },
    u: {
        sound: new Howl({
          src: ['../sounds/flash-2.mp3']
        }),
        color: '#27ae60',
        shape: "circle",
        size: 3,
        number: 1,
        animation: "hueChange"
    },
    i: {
        sound: new Howl({
          src: ['../sounds/flash-3.mp3']
        }),
        color: '#2980b9',
        shape: "square",
        size: 4,
        number: 2,
        animation: "rotate"
    },
    o: {
        sound: new Howl({
            src: ['../sounds/glimmer.mp3']
        }),
        color: '#8e44ad',
        shape: "square",
        size: 3,
        number: 10,
        animation: "scramble"
    },
    p: {
        sound: new Howl({
          src: ['../sounds/moon.mp3']
        }),
        color: '#2c3e50',
        shape: "triangle",
        size: 5,
        number: 1,
        animation: "hueChange"
    },
    a: {
        sound: new Howl({
          src: ['../sounds/pinwheel.mp3']
        }),
        color: '#f1c40f',
        shape: "square",
        size: 3,
        number: 6,
        animation: "none"
    },
    s: {
        sound: new Howl({
          src: ['../sounds/piston-1.mp3']
        }),
        color: '#e67e22',
        shape: "star",
        size: 5,
        number: 6,
        points: 12,
        animation: "rotate"

    },
        d: {
        sound: new Howl({
          src: ['../sounds/piston-2.mp3']
        }),
        color: '#e74c3c',
        shape: "circle",
        size: 2,
        number: 6,
        animation: "none"
    },
    f: {
        sound: new Howl({
          src: ['../sounds/prism-1.mp3']
        }),
        color: '#95a5a6',
        shape: "square",
        size: 1,
        number: 10,
        animation : "rotate"
    },
    g: {
        sound: new Howl({
          src: ['../sounds/prism-2.mp3']
        }),
        color: '#f39c12',
        shape: "triangle",
        size: 3,
        number: 6,
        animation : "hueChange"
    },
    h: {
        sound: new Howl({
          src: ['../sounds/prism-3.mp3']
        }),
        color: '#d35400',
        shape: "star",
        size: 5,
        number: 1,
        points: 10,
        animation: "none"
    },
    j: {
        sound: new Howl({
          src: ['../sounds/splits.mp3']
        }),
        color: '#1abc9c',
        shape: "circle",
        size: 2,
        number: 3,
        animation: "scramble"
    },
    k: {
        sound: new Howl({
          src: ['../sounds/squiggle.mp3']
        }),
        color: '#2ecc71',
        shape: "square",
        size: 3,
        number: 6,
        animation : "rotation"
    },
    l: {
        sound: new Howl({
          src: ['../sounds/strike.mp3']
        }),
        color: '#3498db',
        shape: "star",
        size: 3,
        number: 6,
        points : 5,
        animation : "rotation"
    },
    z: {
        sound: new Howl({
          src: ['../sounds/suspension.mp3']
        }),
        color: '#9b59b6',
        shape: "triangle",
        size: 3,
        number: 6,
        animation: "hueChange"
    },
    x: {
        sound: new Howl({
          src: ['../sounds/timer.mp3']
        }),
        color: '#34495e',
        shape: "circle",
        size: 3,
        number: 6,
        animation : "rotation"
    },
    c: {
        sound: new Howl({
          src: ['../sounds/ufo.mp3']
        }),
        color: '#16a085',
        shape: "star",
        size: 3,
        number: 6,
        animation: "hueChange",
        points: 13
    },
    v: {
        sound: new Howl({
          src: ['../sounds/veil.mp3']
        }),
        color: '#27ae60',
        shape: "square",
        size: 3,
        number: 6,
        animation : "rotation"
    },
    b: {
        sound: new Howl({
          src: ['../sounds/wipe.mp3']
        }),
        color: '#2980b9',
        shape: "circle",
        size: 3,
        number: 6,
        points: 5,
        animation: "hueChange"
    },
    n: {
        sound: new Howl({
            src: ['../sounds/zig-zag.mp3']
        }),
        color: '#8e44ad',
        shape: "triangle",
        size: 3,
        number: 6,
        animation: "scramble"
    },
    m: {
        sound: new Howl({
          src: ['../sounds/moon.mp3']
        }),
        color: '#2c3e50',
        shape: "square",
        size: 1,
        number: 7,
        animation: "hueChange"
    }
}   