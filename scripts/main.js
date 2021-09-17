const gridContainer=document.querySelector("#gridContainer");

let gridElementsPerSide=16;
let totalGridElements=Math.pow(gridElementsPerSide,2);
console.log(totalGridElements);

for(let i=0;i<totalGridElements;i++){
    const gridElement=document.createElement("div");
    gridElement.style.height="40px";
    gridElement.style.width="40px";
    gridElement.style.backgroundColor="coral";

    gridElement.setAttribute("class", "gridClass");

    gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor="black";
    })
    
    gridContainer.appendChild(gridElement);
}

const clearButton=document.querySelector("#clearButton");

clearButton.addEventListener("click", () => {
    document.querySelectorAll(".gridClass").forEach(e=>e.style.backgroundColor="coral");
}
)