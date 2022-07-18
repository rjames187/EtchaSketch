// grab container DOM node reference
let container = document.getElementById("container");

// side length of the grid container in pixels
const gc_sl = container.clientHeight;

// number of square divs in a row in the grid container
let numDivs = 16;

// side length of a grid div;
let sl = gc_sl / numDivs;

// construct grid

for (let i = 0; i < numDivs; i++) {
    // construct row with attributes
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.cssText = `height: ${sl}px; width: ${gc_sl}px`;
    
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

