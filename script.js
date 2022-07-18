// side length of the grid container in pixels
const GRID_CONTAINER_SIDE_LENGTH = 800;

// number of square divs in a row in the grid container
let numDivs = 16;

// side length of a grid div;
let sl = GRID_CONTAINER_SIDE_LENGTH / numDivs;

// construct grid
let container = document.getElementById("container");

for (let i = 0; i < numDivs; i++) {
    // construct row with attributes
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.cssText = `height: ${sl}px; width: ${GRID_CONTAINER_SIDE_LENGTH}px`;
    
    for (let j = 0; j < numDivs; j++) {
        // construct unit with attributes
        const unit = document.createElement("div");
        unit.classList.add("unit");
        unit.style.cssText = `height: ${sl}px; width: ${sl}px`;

        // hover event listener
        unit.addEventListener('mouseover', () => {
            unit.classList.add("black-bc");
        });

        row.appendChild(unit);
    }
    
    container.appendChild(row);
}

