const wrapper = document.querySelector(".wrapper");

for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("child");
    div.setAttribute("style", "border: 2px solid black; width: 1rem; height:1rem;");

    wrapper.appendChild(div);
}

wrapper.addEventListener("mouseover", changeColor);

function changeColor(e){
    const target = e.target;

    target.setAttribute("style", "background: #f00;");

}


