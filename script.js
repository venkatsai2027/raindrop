document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const form = document.getElementById("grid-form");

    let rows = parseInt(document.getElementById("rows").value, 10);
    let cols = parseInt(document.getElementById("cols").value, 10);

    function createGrid() {
        grid.innerHTML = ""; // Clear existing grid
        grid.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 30px)`;
        
        for (let i = 0; i < rows * cols; i++) {
            const cell = document.createElement("div");
            grid.appendChild(cell);
        }

        cells = Array.from(grid.children); // Update cells array after creating new grid
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createRainDrop(startPosition) {
        let currentRow = 0;

        function fall() {
            if (currentRow > 0) {
                const previousCell = cells[(currentRow - 1) * cols + startPosition];
                previousCell.style.backgroundColor = "";
            }
            if (currentRow < rows) {
                const currentCell = cells[currentRow * cols + startPosition];
                currentCell.style.backgroundColor = currentColor;
                currentRow++;
                setTimeout(fall, 100);
            }
        }

        fall();
    }

    function createMultipleRainDrops() {
        const startPosition = Math.floor(Math.random() * cols);
        const numDrops = 5; // Number of raindrops per column
        for (let i = 0; i < numDrops; i++) {
            setTimeout(() => createRainDrop(startPosition), i * 200); // Stagger the start of each raindrop
        }
    }

    let currentColor = getRandomColor();
    setInterval(() => {
        currentColor = getRandomColor();
    }, 3000 + Math.random() * 1000);

    function updateGrid() {
        rows = parseInt(document.getElementById("rows").value, 10);
        cols = parseInt(document.getElementById("cols").value, 10);
        createGrid();
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        updateGrid();
    });

    // Initial grid creation
    createGrid();

    // Create multiple raindrops every 300ms
    setInterval(createMultipleRainDrops, 300);
});
