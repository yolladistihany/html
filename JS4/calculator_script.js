function getInputValues() {
    const angka1Element = document.getElementById('angka1');
    const angka2Element = document.getElementById('angka2');
    const hasilElement = document.getElementById('hasilKalkulasi');
    
    // Mengambil nilai dari input
    const angka1Str = angka1Element.value;
    const angka2Str = angka2Element.value;
    
    // Validasi input kosong
    if (angka1Str === '' || angka2Str === '') {
        hasilElement.textContent = 'Error: Harap masukkan kedua angka!';
        hasilElement.style.color = 'red';
        return null;
    }
    
    const angka1 = Number(angka1Str);
    const angka2 = Number(angka2Str);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        hasilElement.textContent = 'Error: Harap masukkan angka yang valid!';
        hasilElement.style.color = 'red';
        return null;
    }
    
    return { angka1, angka2, hasilElement };
}
//menampilkan hasil
function tampilkanHasil(hasilElement, operasi, angka1, angka2, hasil) {
    hasilElement.textContent = `${angka1} ${operasi} ${angka2} = ${hasil}`;
    hasilElement.style.color = 'green';
    hasilElement.style.fontWeight = 'bold';
}
//menampilkan error
function tampilkanError(hasilElement, pesan) {
    hasilElement.textContent = `Error: ${pesan}`;
    hasilElement.style.color = 'red';
    hasilElement.style.fontWeight = 'normal';
}
// 1. Fungsi Tambah
function tambah() {
    const values = getInputValues();
    if (!values) return;
    
    const { angka1, angka2, hasilElement } = values;
    const hasil = angka1 + angka2;
    
    tampilkanHasil(hasilElement, '+', angka1, angka2, hasil);
}
// 2. Fungsi Kurang
function kurang() {
    const values = getInputValues();
    if (!values) return;
    
    const { angka1, angka2, hasilElement } = values;
    const hasil = angka1 - angka2;
    
    tampilkanHasil(hasilElement, '-', angka1, angka2, hasil);
}
// 3. Fungsi Kali
function kali() {
    const values = getInputValues();
    if (!values) return;
    
    const { angka1, angka2, hasilElement } = values;
    const hasil = angka1 * angka2;
    
    tampilkanHasil(hasilElement, '×', angka1, angka2, hasil);
}
// 4. Fungsi Bagi
function bagi() {
    const values = getInputValues();
    if (!values) return;
    
    const { angka1, angka2, hasilElement } = values;
    
    // Penanganan error khusus untuk pembagian dengan nol
    if (angka2 === 0) {
        tampilkanError(hasilElement, 'Tidak dapat membagi dengan nol!');
        return;
    }
    
    const hasil = angka1 / angka2;
    
    // Menampilkan hasil dengan maksimal 4 angka desimal
    const hasilFormatted = Number.isInteger(hasil) ? hasil : hasil.toFixed(4);
    
    tampilkanHasil(hasilElement, '÷', angka1, angka2, hasilFormatted);
}
document.addEventListener('DOMContentLoaded', function() {
    console.log("Kalkulator sederhana telah dimuat.");
    console.log("Gunakan fungsi tambah(), kurang(), kali(), atau bagi().");
});