const colorPalette= document.getElementById("colorPalette")
const colorInput= document.getElementById("colorText")
const applyColor= document.getElementById("applyColor")
const colorDisplay= document.getElementById("colorDisplay")

function hexToRgb(hex){
    const bigint =parseInt(hex.slice(1),16)
    const r=(bigint >> 16) & 255;
    const g=(bigint >> 8) & 255;
    const b=bigint & 255;

    return 'Rgb(${r},${g},${b})'
}
function isValidHex(color){
    return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color)
}

colorPalette.addEventListener("input",(e)=>{
    const hexColor=e.target.value
    console.log(hexColor)
    document.body.style.backgroundColor=hexColor
    colorDisplay.textContent=`HEX: ${hexColor.toUpperCase()} | RGB : ${hexToRgb(hexColor)}`

})
applyColor.addEventListener("click",()=>{
    const inputColor=colorInput.value.trim()
    if(isValidHex(inputColor)){
        document.body.style.backgroundColor=inputColor
        colorDisplay.textContent=`HEX: ${inputColor.toUpperCase()} | RGB : ${hexToRgb(inputColor)}`

    }
    else{
        alert("Invalid Hex Color")
    }
})