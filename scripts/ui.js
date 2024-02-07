import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons");
// menu list divini cağırma

const menuList = document.getElementById("menu-list");

// arayüz değişikliği yapan bütün fonksiyonları bu dosyada tutacağız

export const renderMenuItems = (data) => {
  // data dızısındeki her bır obje ıcın bır tane kart html i olustur

  // join metotu diziyi metine çevirmemizi sağladı
  const cardHTML = data
    .map(
      (item) => `<a
  id="card"
  href="/detail.html?id=${item.id}"
  class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
>
  <img class="rounded shadow img-fluid" src="${item.img}" 
  />

  <div>
    <div class="d-flex justify-content-between">
      <h5>${item.title}</h5>
      <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
    </div>
    <p class="lead">
     ${item.desc}
    </p>
  </div>
</a>`
    )
    .join("");

  // oluşturulan card ları #menuList divinin içine aktar
  menuList.innerHTML = cardHTML;
};

// dizideki her bir eleman için ekrana buton basan bir fonksiyon yaz
export const renderButtons = (activeText) => {
  // eskiden olusturulan butonları kaldırmaya yaran kod
  buttonsArea.innerHTML = "";

  // butonların her bırı ıcın asagıdakı adımları ızlıyoruz
  buttonData.forEach((btn) => {
    // 1= button elementi olustaracagız
    const buttonEle = document.createElement("button");
    // 2= class belirle
    buttonEle.className = "btn btn-outline-dark";
    // 3= data-id değerini tanımla
    buttonEle.setAttribute("data-id", btn.value);
    // 4= içindeki yazıyı belirle
    buttonEle.innerText = btn.text;
    //5= eğerki butonun yazısı active yazı ıle eslesırse sıyah yap
    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    // 6= butonu dom (html) a gonder
    buttonsArea.appendChild(buttonEle);
  });
};

/*
<button data-id="all" class="btn btn-outline-dark">Hepsi</button>

*/
