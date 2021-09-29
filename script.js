let main_number=document.querySelector(".main__number")
main_number.addEventListener("click",(e)=>{
e.target.closest(".circle").innerHTML+=`<div class="cross">X</div>`
})
for (i=1;i<100;i++){
main_number.innerHTML+=`<div class="circle">${i}</div>`
}
main_number.innerHTML+=`<div class="circle">00</div>`