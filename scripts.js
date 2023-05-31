const creator = document.querySelector(".container");
let containerWidth = getComputedStyle(creator);
containerWidth = containerWidth.width;
let re = /\d/g;
let finalWidth = containerWidth.match(re);
finalWidth = Number(finalWidth.join(""));
console.log(finalWidth);

function initialGrid(){
    const gridLayout = 256;
    const gridLayoutUnit = Math.sqrt(gridLayout);
    for(let block = 0; block < gridLayout; block++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("contained");
        newDiv.style.height = ((finalWidth/gridLayoutUnit) - 10) + "px";
        newDiv.style.width = ((finalWidth/gridLayoutUnit) - 10) + "px";
        creator.appendChild(newDiv);
    }
}

initialGrid();

const btnSelector = document.querySelector("button");
btnSelector.addEventListener("click", btnGrid);

function btnGrid(){
    let limit = Number(prompt("Please choose the grid you want to create(from 1 to 100): "));
    if(limit < 1 || limit > 100){
        alert("please select a valid value");
        return btnGrid();
    }
    
    const divCon = document.querySelectorAll(".contained");
    const eraser = divCon.forEach((divItem) => {
        creator.removeChild(divItem);
    });
    let limitGrid = limit ** 2;
    console.log(limitGrid);
    let rgbHolder = [];
    for(let block = 0; block < limitGrid; block++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("contained");
        newDiv.style.height = ((finalWidth/limit) - 10) + "px";
        newDiv.style.width = ((finalWidth/limit) - 10) + "px";
        creator.appendChild(newDiv);

        for(let i = 0; i < 3; i++){
            let coloring = Math.floor(Math.random() * 256);
            rgbHolder.push(coloring);
        }
        newDiv.style.backgroundColor = `rgb(${rgbHolder[0]},${rgbHolder[1]},${rgbHolder[2]})`;
    }
}