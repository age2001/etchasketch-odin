const grid = document.querySelector(".grid");

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



