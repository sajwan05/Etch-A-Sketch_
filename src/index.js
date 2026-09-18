const wrapper = document.querySelector(".wrapper");

for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.setAttribute("style", "border: 2px solid black; width: 1rem; height:1rem;");

    wrapper.appendChild(div);
}

