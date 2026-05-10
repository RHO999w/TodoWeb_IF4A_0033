
const inputTugas = document.getElementById("inputTugas")
const inputTanggal = document.getElementById("inputTanggal");
const btntambah = document.getElementById("btnTambah")
const daftarTugas = document.getElementById("daftarTugas")

btntambah.addEventListener("click", function(){
    
    if(teskTugas === ""){
        alert("Data harus dimasukan!");
        return;
    }

    let teskTugas = inputTugas.value;
    let tanggalValue = inputTanggal.value || "Tidak ada tanggal";
    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");
    spanbaru.innerHTML = teskTugas + " <small>(" + tanggalValue + ")</small>";

    let tombolHapus = document.createElement("button");
        tombolHapus.innerHTML = "Hapus";
        tombolHapus.style.marginLeft = "10px";
        tombolHapus.onclick = function() {
        listbaru.remove();
    };

    listbaru.appendChild(spanbaru);
    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0){
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.value = "";


});