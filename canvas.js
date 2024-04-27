/**
 * @type HTMLCanvasElement
 */

window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    /**
    ctx.strokeStyle = "red"
    ctx.lineWidth = 5;
    ctx.fillRect(100, 100, 200, 500);
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2;
    ctx.fillRect(200, 200, 200, 500);

//window.addEventListener('resize, ')

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(200,150);
ctx.closePath();
ctx.stroke();
 */

    //variables
    let painting = false;
    function startPosition(e) {
        painting = true;
       draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.linecap = "round";
        ctx.strokeStyle = "green";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});





