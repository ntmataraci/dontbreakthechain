let main_number=document.querySelector(".main__number")
let y=0
let max=0

/* WHEN CLICKED ADD X */

main_number.addEventListener("click",(e)=>{
    console.log(maxRow())
    if (+e.target.closest(".circle").innerText.replace("X","")==(maxRow()+1)){
e.target.closest(".circle").innerHTML+=`<div class="cross">X</div>`
    }
})


/* CIRCLE MAKER LOOP */
for (i=1;i<100;i++){
main_number.innerHTML+=`<div class="circle">${i}</div>`
}
main_number.innerHTML+=`<div class="circle">00</div>`

/* GET LOCAL FOR CROSSED DAYS */
if (localStorage.getItem("notBreak_name")!=null){
    document.getElementById("goal").value=localStorage.getItem("notBreak_name")
}

if (+localStorage.getItem("notBreakChain")>0){
    for (i=0;i<(+localStorage.getItem("notBreakChain"));i++){

        document.querySelectorAll(".circle")[i].innerHTML+=`<div class="cross">X</div>`
    }
}

/*MAX VALUE IN CROSSED VALUES */
function maxRow() {
    let row = document.querySelectorAll(".cross")
    if(row.length==0){
                  localStorage.setItem("notBreakChain",y+1)
        return 0

    }else{
    row.forEach(x => {
        y < +x.closest(".circle").innerText.replace("X", "") ? y = +x.closest(".circle").innerText.replace("X", "") : ""
    })
    localStorage.setItem("notBreakChain",y+1)
    return y
}
}

document.getElementById("goal").addEventListener("change",()=>{
const myGoal=document.getElementById("goal").value
localStorage.setItem("notBreak_name",myGoal)
})
