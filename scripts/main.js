const gridContainer=document.querySelector("#gridContainer");

let gridElementsPerSide=16;
let totalGridElements=Math.pow(gridElementsPerSide,2);
let gridElementSize=640/gridElementsPerSide;

function fillTheGrid(){
    for(let i=0;i<totalGridElements;i++){
        const gridElement=document.createElement("div");
        gridElement.style.height=gridElementSize+"px";
        gridElement.style.width=gridElementSize+"px";
        gridElement.style.backgroundColor="coral";
    
        gridElement.setAttribute("class", "gridClass");
    
        gridElement.addEventListener("mouseover", () => {
            gridElement.style.backgroundColor="black";
        })
        
        gridContainer.appendChild(gridElement);
    }
}

const clearButton=document.querySelector("#clearButton");

function renewGrid(){
    gridElementsPerSide=prompt("How many grid elements do you wish per side?");
    totalGridElements=Math.pow(gridElementsPerSide,2);
    gridElementSize=640/gridElementsPerSide;
    gridElementSize=Math.round(Math.floor(gridElementSize*10))/10;
}

clearButton.addEventListener("click", () => {
    document.querySelectorAll(".gridClass").forEach(e=>e.style.backgroundColor="coral");
    renewGrid();
    document.querySelectorAll(".gridClass").forEach(e=>e.remove());
    fillTheGrid();
}
)


fillTheGrid();