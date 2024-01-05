const container = document.querySelector('.main-container');


function createGrid () {
    for (let i = 0; i < 16 * 16; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    };
};

window.onload = createGrid();