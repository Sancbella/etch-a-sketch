
var clearBtn = document.querySelector("button")
var askSize = ''
var gridPcs = ''

const getSize = () => {
    askSize = prompt("How wide do you want your etch-a-sketch?")
}

var generateGrid = () => {
    let container = document.querySelector("body > div.grid-container");
    getSize();
    if (askSize > 100) {
        askSize = 100
    }
    var cellDimension = 600/askSize
    console.log(cellDimension);
    
    for (let i = 0; i < (askSize*askSize); i++) {
        newDiv = document.createElement('div');
        newDiv.className += "grid-pc"
        newDiv.style.height= `${cellDimension}px`
        newDiv.style.width = `${cellDimension}px`
        container.appendChild(newDiv);
    }
    
    console.log('Generation Complete');
    var gridPcs = document.querySelectorAll("div>div");
    gridPcs.forEach((gridPc) => {
        gridPc.addEventListener('mouseover',(e) => {
            e.target.classList.toggle('hover'); 
        });
        console.log('listener added');
    });
}
var removeGrid = () => {
    var gridPcs = document.querySelectorAll("div>div");
    gridPcs.forEach((gridPc) => {
        gridPc.remove();
    });
    generateGrid();
}
generateGrid();

//listens to button
clearBtn.addEventListener('click', () => {
    removeGrid();    
})
