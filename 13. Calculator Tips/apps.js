const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal() {
    // 1. Ambil nilai input dan konversi ke number
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    
    // 2. VALIDASI INPUT (tempat yang tepat)
    if (isNaN(billValue) || isNaN(tipValue)) {
        total.innerText = "Mohon masukkan angka yang valid";
        return; // Hentikan fungsi jika input tidak valid
    }
    
    if (billValue <= 0) {
        total.innerText = "Nilai tagihan harus lebih dari 0";
        return;
    }
    
    // 3. Jika input valid, lanjut perhitungan
    const totalValue = billValue * (1 + tipValue / 100);
    
    // 4. Format ke Rupiah
    total.innerText = "Rp" + totalValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

btn.addEventListener("click", calculateTotal);