const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const navbar = document.querySelector("#navbar");

if(bar){
  bar.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
  })
}

if(close){
  close.addEventListener("click", ()=>{
    navbar.classList.remove("active");
  })
}