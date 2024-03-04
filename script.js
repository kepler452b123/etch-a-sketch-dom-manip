const grid= document.querySelector(".grid");
const promptButton = document.querySelector("#prompt");
const clearButton = document.querySelector("#clear");

let dimensions = 16
generateGrid(dimensions);

function generateGrid(dimension){
    for (let i = 0; i < dimension; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < dimension; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener('mouseover', function (e) {
                if (e.buttons === 1){
                    e.target.style.background = "black";
                }
            })
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function clearGrid(){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

promptButton.addEventListener('click', () => {
    dimensions = parseInt(prompt("Enter dimensions for the grid"));
    clearGrid();
    generateGrid(dimensions);
})

clearButton.addEventListener('click', () =>{
    clearGrid();
    generateGrid(dimensions);
})



