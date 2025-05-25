// element apa saja yang dibutuhkan
const clockElement = document.getElementById('clock');
const hourElement = document.getElementById('Hour');
const minuteElement = document.getElementById('Minute');
const secondElement = document.getElementById('Second');   
const hourFormatSelect = document.getElementById('hourFormat');
const showSecondsCheckbox = document.getElementById('showSeconds');

// variabel state
let hourFormat = 12; // default dalam 12 jam
let showSeconds = true; // otomatis menampilkan detik

//fungsi untuk mengupdate waktu
function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // konversi ke format 12 jam
    if (hourFormat === 12) {
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12; // jika jam 0, ubah menjadi 12
        hourElement.textContent = `${String(hour).padStart(2, '0')} ${ampm}`;
    } else {
        // format 24 jam
        hourElement.textContent = String(now.getHours()).padStart(2, '0');
    }
    
    // update elemen menit
    minuteElement.textContent = String(minute).padStart(2, '0');
        
    // tampilkan detik jika diinginkan
    if (showSeconds) {
        secondElement.textContent = String(second).padStart(2, '0');
    } else {
        secondElement.textContent = '';
    }
}

// Event listener untuk format jam
hourFormatSelect.addEventListener('change', (e) => {
    hourFormat = parseInt(e.target.value);
    updateClock();
});

// Event listener untuk menampilkan detik
showSecondsCheckbox.addEventListener('change', (e) => {
    showSeconds = e.target.checked;
    updateClock();
});

// Perbarui jam segera saat halaman dimuat
updateClock();

// Perbarui jam setiap detik
setInterval(updateClock, 1000);