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
            unit.style.cssText = `height: ${sl}px; width: ${sl}px; border-width: ${.0631578947 * sl}px`;

            // hover event listener
            unit.addEventListener('mouseover', () => {
                let color = +getComputedStyle(unit).backgroundColor.match(/(\d+)/)[0];
                let newColor = color;
                if (color >= 25.5) {
                    newColor = color -= 25.5;
                }
                unit.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
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
    if (numDivs > 100) {
        alert('The number you have entered is too large.')
    } else if (numDivs < 1) {
        alert('The number you have entered is too small.')
    } else {
        changeGridSize(numDivs);
    }
});

constructGrid(numDivs, gc_sl, sl);

