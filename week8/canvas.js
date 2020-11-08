let canvas = document.querySelector("canvas");
let context = canvas.getContext('2d');

class Circles {
    constructor(r, dx, dy) {
        this.x = Math.random() * (270 - 30) + 30;
        this.y = Math.random() * (120 - 30) + 30;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
    }

    drawCircle() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, Math.PI * 4, false);
        context.strokeStyle = 'green';
        context.stroke();
    }

    update() {
        if (this.x + this.r > 300 || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > 150 || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.drawCircle();
    }
}

let circleArray = [];
function addCircle(){
    let dx = .2
    let dy = .2
    let r = Math.random() * (15 - 10) + 10;
    let circle = new Circles(r, dx, dy);
    circleArray.push(circle);
}

function moveCircle() {
    //window.cancelAnimationFrame(moveCircle);
    requestAnimationFrame(moveCircle);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let current of circleArray){
        current.update();
    }
}

document.getElementById('btn').addEventListener("click", ()=>{
    addCircle();
    moveCircle();
});