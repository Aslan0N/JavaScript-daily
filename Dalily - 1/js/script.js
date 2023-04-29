const  eye = document.querySelector(".form i");
const input = document.querySelector("input");

eye.addEventListener('click',()=>{
    input.type = input.type === "password" ? "text" : "password";
    eye.className = `fa-solid fa-eye${input.type === "password" ? "" : "-slash"}`;
})
