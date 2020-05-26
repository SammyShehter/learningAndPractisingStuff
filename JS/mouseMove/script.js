class Utils {
    static randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    static randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)]
    }
}

class Vector2 {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    mult(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    }
    multScalar(v) {
        this.x *= v;
        this.y *= v;
        return this;
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalized() {
        let magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x /= magnitude;
        this.y /= magnitude;
    }

    setFromScalarAngle(scalar, angle) {
        this.x = Math.cos(angle) * scalar;
        this.y = Math.sin(angle) * scalar;
    }
    distanceToSquared(v) {
        var dx = this.x - v.x, dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
}

class Particle {
    constructor(x, y, radius, color, friction) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.pos = new Vector2(x, y);
        this.radius = radius;
        this.friction = new Vector2(friction, friction);
        this.color = color;
        this.mouse = new Vector2(this.canvas.width / 2, this.canvas.height / 2);
        this.vx = new Vector2(0, 0);
        this.num = Math.random() * 5 + 2;
    }
    update() {
        this.vectorOfParticleToMouse = this.mouse.clone().sub(this.pos);
        this.vectorOfParticleToMouse.normalized();
        this.vectorOfParticleToMouse.multScalar(.1);
        this.vx.add(this.vectorOfParticleToMouse);
        this.vx.normalized();
        this.pos.add(this.vx.clone().multScalar(this.num));
    }
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.shadowBlur = 5;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.globalAlpha = '1'
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.restore();
    }
    mousemove() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.set(e.clientX, e.clientY);
        })
    }
}

window.onload = function () {

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particles = [],
        colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#F2E8C9"];

    window.onresize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(
            Math.random() * width,
            Math.random() * height,
            10,
            Utils.randomColor(colors),
        ))
        particles[i].mousemove();
    }

    render();
    function render() {
        ctx.fillStyle = 'hsla(260,40%,5%,.2)';
        ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            var p = particles[i]
            p.update();
            p.draw();
        }
        requestAnimationFrame(render);
    }
}