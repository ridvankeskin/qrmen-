//diğer dosyalardan alınan veriler

import { renderMenuItems, renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById("buttons");
// datayı global scope da tanımla
let data;

// menü verilerini json dosyasından çeken fonksiyon yaz

async function fetchMenu() {
  //api' dan verileri al
  const res = await fetch("./db.json");

  // json verisini js ye çevir
  data = await res.json();
}

//sayfa yüklenme olayını izle
window.addEventListener("DOMContentLoaded", async () => {
  // ekrana butonları bas
  renderButtons("Hepsi");
  // verileri ceken fonksıyonu calıstır
  fetchMenu()
    // fonksiyon basarılı olursa ekrana kartları basan fonksıyonu calıstır
    .then(() => renderMenuItems(data.menu));
});

// butonlara tıklanma olayını izle
buttonsArea.addEventListener("click", (event) => {
  // butona tıklanmadıysa fonksıyonu durdur
  if (event.target.id == "buttons") return;

  // active olan butonu belirlemek için butonları ekrana tekrar bas
  renderButtons(event.target.innerText);
  // filtrelenecek kategori ismini belirlememiz gerekli
  const selectedCategory = event.target.dataset.id; // breakfast

  if (selectedCategory === "all") {
    //? eğer hepsi seceneği secıldiyse bu işlemi yap (if)
    // bütün menu elemanlarını filtreleme yapmadan ekrana bas
    renderMenuItems(data.menu);
  } else {
    //? eğer hepsi seceneği secılmediyse bu işlemi yap (else)
    // ürünlerin arasından kategori ismi bizim sectiğimiz
    // kategori ismine eşit olanları al
    const filtred = data.menu.filter(
      (item) => item.category === selectedCategory
    );

    // filtrelenen verileri ekrana bas
    renderMenuItems(filtred);
  }
});
