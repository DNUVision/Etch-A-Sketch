const creator = document.querySelector(".container");
let containerWidth = getComputedStyle(creator);
containerWidth = containerWidth.width;
let re = /\d/g;
let finalWidth = containerWidth.match(re);
finalWidth = Number(finalWidth.join(""));
console.log(finalWidth);

function initialGrid(){
    const gridLayout = 16;
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


