const gridContainer=document.querySelector("#gridContainer");

let gridElementsPerSide=16;
let totalGridElements=Math.pow(gridElementsPerSide,2);
console.log(totalGridElements);

for(i=0;i<totalGridElements;i++){
    const gridElement=document.createElement("div");
    gridElement.style.height="40px";
    gridElement.style.width="40px";
    gridElement.style.backgroundColor="red";
    gridContainer.appendChild(gridElement);
}






const gridElements=document.querySelectorAll(".gridElement");

