
var clearBtn = document.querySelector("button")
var generateGrid = () => {
    let container = document.querySelector("body > div.grid-container");
    for (let i = 0; i < 256; i++) {
        newDiv = document.createElement('div');
        newDiv.className += "grid-pc"
        container.appendChild(newDiv);
    }
    
    console.log('Generation Complete');
    
}

generateGrid();
//listeners
//addEventListener("mouseover",(hoverAction(e)))
const gridPcs = document.querySelectorAll("div>div");

gridPcs.forEach((gridPc) => {
    gridPc.addEventListener('mouseover',(e) => {
        e.target.classList.toggle('hover'); 
    });
    console.log('listener added');
});

clearBtn.addEventListener('click', () => {
    console.log('cleared');
    var selectedPcs = document.querySelectorAll('div')
    selectedPcs.forEach((selectedPc) => {
        selectedPc.classList.remove('hover');
     
        
});
});

