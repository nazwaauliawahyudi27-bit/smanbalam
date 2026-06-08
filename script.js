// 1. Data GeoJSON Resmi 17 SMAN Kota Bandar Lampung
const geojsonData = {
  "type": "FeatureCollection",
  "features": [
    { "type": "Feature", "properties": { "Name": "SMAN 1 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Jend. Sudirman No.41, Rawa Laut, Tanjungkarang Timur, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.265324312577, -5.422592155887927 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 2 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Amir Hamzah No.01, Gotong Royong, Tanjungkarang Pusat, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2548055377536, -5.42618492596343 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 3 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Chairil Anwar No.1, Durian Payung, Tanjungkarang Pusat, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2443380773981, -5.419328917755356 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 4 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Dr. Cipto Mangunkusumo No.88, Kupang Teba, Teluk Betung Utara, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2700412968689, -5.435544233858028 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 5 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Soekarno Hatta, Way Dadi, Sukarame, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2847925218769, -5.379867419710194 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 6 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Ki Agus Anang No.35, Ketapang, Panjang, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2965880034078, -5.438191116668668 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 7 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Teuku Cik Ditiro No.2, Beringin Raya, Kemiling, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2008277863357, -5.403999060924109 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 8 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Laksamana Malahayati No.10, Teluk Betung Selatan, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2579484202413, -5.4494158684019 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 9 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Panglima Polim No.18, Segala Mider, Tanjungkarang Barat, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2486668938505, -5.390293658279919 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 10 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Gatot Subroto No.81, Tanjung Gading, Kedamaian, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2757421164706, -5.428777175697359 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 11 BANDAR LAMPUNG", "Alamat_Sekolah": "Sukamaju, Teluk Betung Timur, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2430996664485, -5.472520536673316 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 12 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Hi. Endro Suratmin, Harapan Jaya, Sukarame, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.310456498265, -5.375869911570098 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 13 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Padat Karya Sinar Harapan, Rajabasa Jaya, Rajabasa, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.256186714561, -5.346840846133356 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 14 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Perum Bukit Kemiling Permai No.109, Kemiling Permai, Kemiling, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.212624504146, -5.379987896465361 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 15 BANDAR LAMPUNG", "Alamat_Sekolah": "Labuhan Dalam, Tanjung Senang, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2681802682707, -5.360638321124148 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 16 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Darussalam, Susunan Baru, Tanjungkarang Barat, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.2292263640676, -5.402434579702363 ] } },
    { "type": "Feature", "properties": { "Name": "SMAN 17 BANDAR LAMPUNG", "Alamat_Sekolah": "Jl. Soekarno Hatta, Pidada, Panjang, Bandar Lampung" }, "geometry": { "type": "Point", "coordinates": [ 105.3248168088665, -5.463241458847338 ] } }
  ]
};

// 2. Inisialisasi Objek Map Utama (Target koordinat di pusat kota Bandar Lampung)
const map = L.map('map', {
    center: [-5.4211, 105.2601],
    zoom: 12,
    zoomControl: false
});

// 3. Pindahkan tombol Zoom ke Kanan Atas agar rapi
L.control.zoom({ position: 'topright' }).addTo(map);

// 4. Tambahkan Lapisan Peta Pihak Ketiga (OpenStreetMap Standar)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// 5. Buat wadah grup penanda (Feature Group) untuk kalkulasi otomatis posisi kamera
const markerGroup = L.featureGroup().addTo(map);

// 6. Ambil element pembungkus list di Sidebar HTML
const listContainer = document.getElementById('list-sekolah');

// 7. Looping data fitur secara presisi dan terpisah menggunakan JavaScript Array forEach
geojsonData.features.forEach(function (feature) {
    const namaSekolah = feature.properties.Name;
    const alamatSekolah = feature.properties.Alamat_Sekolah;
    
    // ATUR KOORDINAT: Ambil data X dan Y dari GeoJSON (GeoJSON: [Bujur, Lintang] -> Leaflet membutuhkan: [Lintang, Bujur])
    const lng = feature.geometry.coordinates[0];
    const lat = feature.geometry.coordinates[1];
    
    // Buat objek marker baru berdasarkan koordinat yang sudah dibalik
    const marker = L.marker([lat, lng]);
    
    // Pasang jendela informasi / popup
    const popupContent = `
        <div class="popup-header">
            <i class="fa-solid fa-graduation-cap"></i>
            <h4 style="margin: 0; font-size: 13px; font-weight:700;">${namaSekolah}</h4>
        </div>
        <div class="popup-body" style="font-size: 11.5px; margin-top: 5px; color:#475569;">
            <p><strong>Alamat:</strong> ${alamatSekolah}</p>
        </div>
    `;
    marker.bindPopup(popupContent, { maxWidth: 250 });
    
    // Masukkan marker ke dalam grup besar di peta
    markerGroup.addLayer(marker);

    // Buat baris teks daftar di sidebar samping secara dinamis
    if (listContainer) {
        const li = document.createElement('li');
        li.className = 'school-item';
        li.innerHTML = `
            <i class="fa-solid fa-school-flag" style="color:#0284c7; margin-top:3px;"></i>
            <div class="info">
                <div class="name" style="font-size:12.5px; font-weight:600; color:#1e293b;">${namaSekolah}</div>
                <div class="addr" style="font-size:11px; color:#64748b; margin-top:2px;">${alamatSekolah}</div>
            </div>
        `;
        
        // AKSI INTERAKSI KLIK: Ketika list diklik, arahkan kamera dan buka popup koordinat yang tepat
        li.addEventListener('click', function () {
            map.flyTo([lat, lng], 16, {
                animate: true,
                duration: 1.5 // Durasi pergerakan kamera (detik) agar terlihat smooth/halus
            });
            
            // Otomatis buka jendela popup penanda sekolah yang bersangkutan
            marker.openPopup();
        });
        
        listContainer.appendChild(li);
    }
});

// 8. Atur kamera otomatis (Auto-zoom fit) agar langsung menyorot area sebaran seluruh marker saat web dimuat
if (markerGroup.getLayers().length > 0) {
    map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });
}
/* =========================
   POPUP PROFIL HEADER
========================= */

const btnProfil =
document.getElementById("btnProfil");

const profilePopup =
document.getElementById("profilePopup");

btnProfil.addEventListener("click", function(){

    profilePopup.classList.toggle("show");

});


/* TUTUP SAAT KLIK DI LUAR */

window.addEventListener("click", function(e){

    if(
        !e.target.closest(".profile-dropdown")
    ){
        profilePopup.classList.remove("show");
    }

});