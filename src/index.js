const wrapper = document.querySelector(".wrapper");

const button = document.querySelector(".sizeGrid");
let number;

button.addEventListener("click", (e) => {
    number = parseInt(prompt("Please enter the size of the grid: "));

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

wrapper.addEventListener("mousemove", changeColor);

function changeColor(e){
    const target = e.target;

    target.style.background = "#f00";

}


