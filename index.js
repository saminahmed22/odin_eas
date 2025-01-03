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

let pixel = 16;
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
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.borderColor = 'black';
        })
        square.addEventListener("mouseout", () => {
            square.style.borderColor = 'silver';
        })
        square.addEventListener("click", () => {
            square.style.backgroundColor = 'black';
        })
        square.addEventListener("contextmenu", () => {
            square.style.backgroundColor = "white";
        })
    })    
}




listeners();