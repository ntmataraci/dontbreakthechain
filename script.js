let main_number=document.querySelector(".main__number")
let maxNumber=+localStorage.getItem("notBreakChain")

/* CIRCLE MAKER LOOP */
for (i=1;i<100;i++){
main_number.innerHTML+=`<div class="circle">${i}</div>`
}
main_number.innerHTML+=`<div class="circle">00</div>`


let circleArr=document.querySelectorAll(".circle")
let crossedArr=document.querySelectorAll(".cross")
circleArr.forEach((x,idx)=>{
    x.addEventListener("click",(e)=>{
let clicked=+e.target.innerText
let clckControl=+e.target.parentElement.innerText.replace("X","")
/*delete */
if (clckControl==maxNumber && e.target.classList.value=="cross"){
    e.target.innerHTML=""
    e.target.classList.remove("cross")
    localStorage.setItem("notBreakChain",maxNumber-1)
}
/* */
maxQuery(clicked,e,idx)
    })
})



/*max value*/
function maxQuery(clicked,e){
maxNumber=+localStorage.getItem("notBreakChain")
if (clicked==maxNumber+1){
localStorage.setItem("notBreakChain",maxNumber+1)
letsCrossed()
}else{
}
}

/*increasing */
letsCrossed()
function letsCrossed(){
    maxNumber=+localStorage.getItem("notBreakChain")
    for (i=0;i<maxNumber;i++){
        circleArr[i].innerHTML=+(i+1)+`<div class="cross">X</div>`

    }
}




/* GET LOCAL FOR CROSSED DAYS */
if (localStorage.getItem("notBreak_name")!=null){
    document.getElementById("goal").value=localStorage.getItem("notBreak_name")
}


document.getElementById("goal").addEventListener("change",()=>{
    const myGoal=document.getElementById("goal").value
    localStorage.setItem("notBreak_name",myGoal)
    })
    
