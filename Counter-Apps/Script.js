const countDisplay = document.getElementById("count")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")
let count = 0 

function undateUI(){
    countDisplay.textContent = count
    decrementBtn.disabled=count<=0
}
incrementBtn.addEventListener("click",()=>{
    console.log("click")
    count++
undateUI()
})

decrementBtn.addEventListener("click",()=>{
    if(count>0) count--
    undateUI()
})
resetBtn.addEventListener("click",()=>{
    count=0
    undateUI()
})

undateUI()