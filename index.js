const container = document.querySelector("#container");

for(i = 0; i<= 16; i++){
    const div = document.createElement("div");
    div.setAttribute("class", "rowDivs");
    container.appendChild(div);
};

const rows = document.querySelectorAll(".rowDivs");
rows.forEach(row => {
    for(j = 0; j<= 16; j++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        row.appendChild(square);
    }   
});

