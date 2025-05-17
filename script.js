function kirimSaranWA() {
  var namaInput = document.getElementById("namaSaran");
  var saranInput = document.getElementById("saranText");

  if (!namaInput || !saranInput) {
    console.error("Elemen dengan ID 'namaSaran' atau 'saranText' tidak ditemukan.");
    alert("Terjadi kesalahan. Mohon coba lagi nanti.");
    return;
  }

  var nama = namaInput.value.trim();
  var saran = saranInput.value.trim();

  if (nama === "") {
    alert("Silakan masukkan nama Anda.");
    return;
  }

  var nomor = "6285715232441"; // Nomor WhatsApp yang dituju (pastikan ini benar)
  var pesan = `Saya ${nama}. Ingin titip saran mengenai infografis Nanoteknologi anda sebagai berikut:\n${saran}`;
  var url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');

  // Optional: Bersihkan kolom input setelah mengirim
  namaInput.value = "";
  saranInput.value = "";
}

// Anda bisa menghapus fungsi kirimWA() jika tidak digunakan lagi
// function kirimWA() {
//   var nama = document.getElementById("nama").value.trim();
//   if (nama === "") {
//     alert("Silakan isi nama Anda terlebih dahulu.");
//     return;
//   }
//   var nomor = "6285210609076";
//   var pesan = `Assalamualaikum Mbk\nSaya ${nama} Izin konfirmasi pembayaran MKNUPN\nDengan Metode Pembayaran VIA Transfer`;
//   var url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
//   window.open(url, '_blank');
// }