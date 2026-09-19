const wrapper = document.querySelector(".wrapper");

const button = document.querySelector(".sizeGrid");
let number;

button.addEventListener("click", (e) => {

    do{
        number = parseInt(prompt("Please enter the size of the grid: "));
    }while(number < 0 || number > 100);
    
    
    

     wrapper.textContent = "";

    for(let i = 0; i < (number * number); i++){
        
        const div = document.createElement("div");
        div.classList.add("dynamic-child");

        div.style.border = "1px solid black";
        div.style.height = "2rem"
        div.style.width = "2rem"
        div.style.flex = `0 0 ${(100/number)}%`;
       
        wrapper.appendChild(div);
    }

});


for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("child");
    div.style.border = "2px solid black"
    div.style.height = "2rem"
    div.style.width = "2rem"

    wrapper.appendChild(div);
}

wrapper.addEventListener("mouseover", changeColor);

function changeColor(e){
    const target = e.target;

    const bgColor = `rgb(${random(256)} ${random(256)} ${random(256)})`;

    target.style.background = bgColor;

}

function random(number){
    return Math.floor(Math.random() * number);
}

