const passwordInput=document.getElementById("password")
const bar1=document.getElementById("bar1")
const bar2=document.getElementById("bar2")
const bar3=document.getElementById("bar3")
const feedback = document.getElementById("feedback")

passwordInput.addEventListener("input",()=>{
    let password= passwordInput.value
  const strength=checkStrength(password)
  updateStrengthIndicator(strength)
  updateFeedback(strength)
})

function checkStrength(password) {
    let strength = 0
// Kriteria kekuatan password:
if (password.length >= 6) strength++; // Minimal 6 karakter
if (/[A-Z]/.test(password)) strength++; // Mengandung huruf kapital
if (/\d/.test(password)) strength++; // Mengandung angka
if (/[!@#$%^&*]/.test(password)) strength++; // Mengandung simbol seperti /[!@#$%^&*]/
return Math.min(strength, 3)
}

function updateStrengthIndicator(strength) {
    // Reset semua bar ke default
    [bar1, bar2, bar3].forEach(bar => {
        bar.className = 'bar'
    })
    
    // Update indicator
    if (strength >= 1) bar1.classList.add('active')
    if (strength >= 2) bar2.classList.add('medium')
    if (strength >= 3) bar3.classList.add('strong')
} 

function updateFeedback(strength){
    const messages = [
        "Masukkan password",
        "Lemah: tambahkan karakter",
        "Sedang: tambahkan angka/simbol",
        "Kuat!"
    ]
    feedback.textContent = messages[strength] || ""
}
