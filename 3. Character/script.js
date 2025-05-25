const textAreaEl=document.getElementById("textarea")
const totalCounter=document.getElementById("total-counter")
const remainingCounter=document.getElementById("remaining-counter")

textAreaEl.addEventListener("keydown",()=>{
    updateCounter()
})

updateCounter()
function updateCounter(){
    totalCounter.innerText=textAreaEl.value.length

    remainingCounter.innerText=textAreaEl.getAttribute("maxlength")-textAreaEl.value.length
}