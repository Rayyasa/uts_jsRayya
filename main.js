class Hewan {
  constructor(nama, jenis, berat, habitat) {
    this.nama = (nama);
    this.jenis = (jenis);
    this.habitat = (habitat);
    this.berat = (berat);
  } 
  deskripsi() {
    return "hewan ini bernama " + this.nama + " " + "berjenis" + " "+ this.jenis + " dan habitatnya berada di " + " " + this.habitat + " dan beratnya sebesar " + this.berat + "kg"; 
  }
  makan(makanan) {
    return this.nama + "makan " + makanan;
  }
}

let gajah = new Hewan ("Gajah", "mamalia", 7000, "hutan");
console.log(gajah.deskripsi());
console.log(gajah.makan("rumput"));



const body = document.body;
const text1 = document.createElement("h1");
text1.textContent = "Berhasil!!";
const text2 = document.createElement("h1");
text2.textContent = "X RPL merah";
text2.style.color = "red";
const text3 = document.createElement("h1");
text3.textContent = "X RPL hijau";
text3.style.color = "green";

// const btnClick = document.getElementById("btnClick");

document.getElementById("btnclick").addEventListener("click", function () {
  body.append(text1);
});

document.getElementById("btnclick").addEventListener("dblclick", function () {
  alert("Tombol di klik 2 kali");
});

document.getElementById("btninout").addEventListener("mouseenter", function () {
  body.append(text2);
});

document.getElementById("btninout").addEventListener("mouseleave", function() {
  body.append(text3);
});

document.getElementById("btnremove").addEventListener("click", function() {
  document.body.remove(body);
});