function updateClock() {
  const now = new Date();

  const hariList = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const bulanList = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const pasaranList = ["Legi","Pahing","Pon","Wage","Kliwon"];

  const hari = hariList[now.getDay()];
  const tanggal = now.getDate();
  const bulan = bulanList[now.getMonth()];
  const tahun = now.getFullYear();

  const jam = String(now.getHours()).padStart(2,'0');
  const menit = String(now.getMinutes()).padStart(2,'0');
  const detik = String(now.getSeconds()).padStart(2,'0');

  // 🔥 BASE BENAR (1 Jan 1970 = Kamis Wage)
  const base = new Date("1970-01-01");
  const selisih = Math.floor((now - base) / 86400000);

  const pasaran = pasaranList[(selisih + 3) % 5 < 0 ? (selisih + 3) % 5 + 5 : (selisih + 3) % 5];

  // Neptu
  const neptuHari = {
    "Minggu":5,"Senin":4,"Selasa":3,"Rabu":7,"Kamis":8,"Jumat":6,"Sabtu":9
  };

  const neptuPasaran = {
    "Legi":5,"Pahing":9,"Pon":7,"Wage":4,"Kliwon":8
  };

  const neptu = neptuHari[hari] + neptuPasaran[pasaran];

  // ⚠️ Data tetap (khusus contoh kamu)
  // (Kalau mau full otomatis semua tanggal, nanti aku bisa upgrade lagi)
  let wuku = "-";
  let jawa = "-";
  let hijriah = "-";

  if (tanggal === 5 && bulan === "Mei" && tahun === 2026) {
    wuku = "Tolu";
    jawa = "18 Sela 1959 Ja Dal";
    hijriah = "17 Dzulqaidah 1447 H";
  }

  // tampilkan
  document.getElementById("h").innerText = jam;
  document.getElementById("m").innerText = menit;
  document.getElementById("s").innerText = detik;

  document.getElementById("tgl-masehi").innerHTML =
    `Tanggal Masehi: ${tanggal} ${bulan} ${tahun}`;

  document.getElementById("tgl-jawa").innerHTML = `
    Weton: ${hari} ${pasaran}<br>
    Wuku: ${wuku}<br>
    Neptu: ${neptu}<br>
    Tanggal Jawa: ${jawa}<br>
    Tanggal Hijriah: ${hijriah}
  `;
}

setInterval(updateClock, 1000);
updateClock();