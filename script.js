function create_grid(numPixel) {
    let container = document.querySelector("#container");
    container.style.display = "inline-block";

    let drawingBox = document.createElement("div");
    drawingBox.className = "drawingBox";
    drawingBox.style.border = "1px solid black";
    drawingBox.style.display = "flex";
    drawingBox.style.flexDirection = "column";


    for (let i = 0; i < numPixel; i++){    
        let row = document.createElement("div");
        row.style.display = "inline-flex";
        row.style.padding = "0";
        row.style.margin = "0";
        for (let j = 0; j < numPixel; j++){
            let pixel = document.createElement("div");
            pixel.style.height = "10px"; 
            pixel.style.width = "10px";
            pixel.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = "black";
            })
            pixel.addEventListener("mouseout", e => {
                e.target.style.backgroundColor = "white";
            })
            row.appendChild(pixel);
        }
        drawingBox.appendChild(row);
    }
    container.appendChild(drawingBox);
}
function delete_grid() {
    let drawingBox = document.querySelector(".drawingBox");
    if (drawingBox){
        drawingBox.remove();
    }
}
function prompt_size() {
    let container = document.querySelector("#UI");
    let size_button = document.createElement("button");
    let size = 0;
    size_button.innerText = ("Change Size");
    size_button.addEventListener("click", e => {
        size = prompt("What size do you want the grid to be?");
        delete_grid();
        create_grid(size);
    })
    container.appendChild(size_button);
}

prompt_size();

