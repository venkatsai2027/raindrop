
document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const rows = 15;
    const cols = 20;
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        grid.appendChild(cell);
    }

    const cells = Array.from(grid.children);

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createRainDrop() {
        const startPosition = Math.floor(Math.random() * cols);
        let currentRow = 0;

        function fall() {
            if (currentRow > 0) {
                const previousCell = cells[(currentRow - 1) * cols + startPosition];
                previousCell.style.backgroundColor = "";
            }
            if (currentRow < rows) {
                const currentCell = cells[currentRow * cols + startPosition];
                currentCell.style.backgroundColor = getRandomColor();
                currentRow++;
                setTimeout(fall, 100);
            }
        }

        fall();
    }

    setInterval(createRainDrop, 300);
});
