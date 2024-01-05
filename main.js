const grid = document.querySelector(".grid");
const resizeButton = document.querySelector("button.resize-button");

resizeButton.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Choose a grid size (0 < size <= 100)"));
    createNewGrid(gridSize);
})

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.className = "gridRow";
    grid.appendChild(row);
}

for (row of document.getElementsByClassName("gridRow")) {
    for (let i = 0; i < 4; i++) {
        const cell = document.createElement("div");
        cell.className = "gridCell";
        cell.addEventListener("mouseover", () => {cell.style["backgroundColor"] = "gray";})
        row.appendChild(cell);
    }
}

function delete_grid() {
    grid.innerHTML = "";
}

function createNewGrid(gridSize) {
    if (gridSize < 1 || gridSize > 100) {
        alert("Input grid size invalid!"); 
        return null;
    }
    delete_grid();

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.className = "gridRow";
        grid.appendChild(row);
    }

    for (row of document.getElementsByClassName("gridRow")) {
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.className = "gridCell";
            cell.addEventListener("mouseover", () => {cell.style["backgroundColor"] = "gray";})
            row.appendChild(cell);
        }
    }

}