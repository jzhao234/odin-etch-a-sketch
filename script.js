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
            pixel.classList.add("pixel");
            pixel.style.height = "10px"; 
            pixel.style.width = "10px";
            pixel.addEventListener("mousedown", e => {
                e.target.style.backgroundColor = "black";
            })
            pixel.addEventListener("mouseover" , e => {
                if(isMouseDown == true){
                    e.target.style.backgroundColor = "black";
                }
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

function delete_all(){
    let container = document.querySelector("#UI");
    
    let delete_drawing = document.createElement("button");
    delete_drawing.innerText = ("Delete Drawing");
    delete_drawing.addEventListener("click", e => {
        let pixels = document.querySelectorAll(".pixel");
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = "white";
        })
    })
    container.appendChild(delete_drawing);
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

let isMouseDown = false;
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);
prompt_size();
delete_all();
create_grid(100);
