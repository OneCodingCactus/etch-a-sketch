const gridContainer=document.querySelector("#gridContainer");

let gridElementsPerSide=16;
let totalGridElements=Math.pow(gridElementsPerSide,2);
console.log(totalGridElements);
let idList=[];

for(let i=0;i<totalGridElements;i++){
    const gridElement=document.createElement("div");
    gridElement.style.height="40px";
    gridElement.style.width="40px";
    gridElement.style.backgroundColor="coral";
    let idOfGridElement="gridElement"+i;
    idList.push(idOfGridElement);
    gridElement.setAttribute("id", idOfGridElement);
    gridContainer.appendChild(gridElement);
}

console.log(idList);

const gridElements=document.querySelectorAll("gridElement");

gridElements.forEach((gridElement) => {
    gridElement.addEventListener("hover", () => {
        gridElement.style.backgroundColor="black";
    })
})

