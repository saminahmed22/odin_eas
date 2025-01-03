function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
};


const container = document.querySelector("#container");


// Creates 16 rows.
function createGrid(pixelCount){
    for(i = 0; i< pixelCount; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "rowDivs");
        container.appendChild(div);
    };

    // Adds 16 squares in each of those 16 rows, thus creating a 16x16 grid.
    const rows = document.querySelectorAll(".rowDivs");
    rows.forEach(row => {
        for(j = 0; j< pixelCount; j++){
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            const squareSize = 960/pixelCount;
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            square.style.border = "1px solid silver"
            row.appendChild(square);
        }   
    });
};

let pixel = 50;
createGrid(pixel);
btn = document.querySelector(".sizebtn");
btn.addEventListener("click", () => {
    pixel = Number(prompt("Add the pixel count for each side(100 max!)"));
    if(pixel <= 100){
        container.innerHTML = ""
        createGrid(pixel);
        listeners();
    }
    else{
        alert("You can add a maximum of 100 pixel each side");
        pixel = Number(prompt("Add the pixel count for each side"));
        container.innerHTML = ""
        createGrid(pixel);
        listeners();
    }

})


function listeners(){
    squares = document.querySelectorAll(".square")

    let isMouseDown = false;
    let mouseButton = null;

    document.addEventListener("mousedown", (e) => {
        if(e.button === 0){
            isMouseDown = true;
            mouseButton = "left";
        }
        else if(e.button === 2){
            isMouseDown = true;
            mouseButton = "right";
        }
    })

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
        mouseButton = null;
    })

    document.addEventListener("mouseup", () => isMouseDown = false)

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if(isMouseDown && mouseButton === "left"){
                square.style.backgroundColor = `rgb(${getRandomRGB()})`;
            }
            else if(isMouseDown && mouseButton === "right"){
                square.style.backgroundColor = 'white';
            }
            else{
                square.style.borderColor = 'black';
            }
        })
        square.addEventListener("mouseout", () => {
            square.style.borderColor = 'silver';
        })
        square.addEventListener("click", () => {
            square.style.backgroundColor = `#rgb(${getRandomRGB()})`;
        })
        square.addEventListener("contextmenu", () => {
            square.style.backgroundColor = "white";
        })
    })
};


listeners();