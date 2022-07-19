// grab container DOM node reference
let container = document.getElementById("container");

// side length of the grid container in pixels
let gc_sl = container.clientHeight;

// number of square divs in a row in the grid container
let numDivs = 16;

// side length of a grid div;
let sl = gc_sl / numDivs;


function removeGrid () {
    for (element of document.querySelectorAll(".row")) {
        element.remove();
    }
}

function constructGrid (numDivs, gc_sl, sl) {
    // construct new grid
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
}

function changeGridSize (numDivs) {
    removeGrid();
    sl = gc_sl / numDivs;
    constructGrid(numDivs, gc_sl, sl);
}

// change grid size button functionality

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const numDivs = +prompt("Please enter an integer between 1 and 100");
    changeGridSize(numDivs);
});

constructGrid(numDivs, gc_sl, sl);

