const container = document.querySelector('.main-container');
let isMouseDown = false;


function handleMouseEvent(event) {
    if (event.type === "mousedown"){
        isMouseDown = true;
    }
    if (event.type === "mouseup"){
        isMouseDown = false;
    }
    if (event.type === "mousedown" || (event.type === "mouseover" && isMouseDown)) {
        this.style.backgroundColor = "blue";
    }
};


function createGrid (LW) {
    for (let i = 0; i < (LW * LW); i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item");

        div.addEventListener('mouseover', handleMouseEvent);
        div.addEventListener('mousedown', handleMouseEvent);
        div.addEventListener('mouseup', handleMouseEvent);

        container.appendChild(div);
    };
};

window.onload = createGrid(16);

