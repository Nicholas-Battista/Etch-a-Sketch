const container = document.querySelector('.main-container');
let isMouseDown = false;
let defaultSize = 16;
let currentColor = "blue";

function handleMouseEvent(event) {
    event.preventDefault();
    
    if (event.type === "mousedown"){
        isMouseDown = true;
    }
    if (event.type === "mouseup"){
        isMouseDown = false;
    }
    if (event.type === "mousedown" || (event.type === "mouseover" && isMouseDown)) {
        this.style.backgroundColor = currentColor;
    }
};

function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function updateSliderValue() {
    let newSize = parseInt(document.getElementById('gridSizeSlider').value);
    document.getElementById('gridSizeValue').textContent = `${newSize}x${newSize}`;
}

const debouncedHandleSliderChange = debounce(handleSliderChange, 200);

function createGrid (LW) {
    container.innerHTML = "";
    for (let i = 0; i < (LW * LW); i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        
        div.style.width = `calc(480px / ${LW})`;
        div.style.height = `calc(480px / ${LW})`;

        div.addEventListener('mouseover', handleMouseEvent);
        div.addEventListener('mousedown', handleMouseEvent);
        div.addEventListener('mouseup', handleMouseEvent);

        container.appendChild(div); 

        document.querySelector('.clear').addEventListener("click", function() {
            div.style.backgroundColor = "lightgray";
        });
    };
    
};

function handleSliderChange() {
    let newSize = parseInt(document.getElementById('gridSizeSlider').value);
    createGrid(newSize);
}

function setColor(color){
    currentColor = color;
}

window.onload = function(){
    createGrid(defaultSize);

    document.getElementById('gridSizeSlider').addEventListener("input", function() {
        updateSliderValue();
        debouncedHandleSliderChange();
    });
};
    


