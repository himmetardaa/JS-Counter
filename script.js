const artı = document.getElementById("artı");
const eksi = document.getElementById("eksi");
const sonuc = document.getElementById("sonuc");
let sonuc_ınt = parseInt(sonuc.innerHTML);

artı.addEventListener("click", (event) => {
    sonuc.innerText = ++sonuc_ınt;
}) // callback function

eksi.addEventListener("click", (event) => {

    const azaltilanDeger = --sonuc_ınt;

    if (azaltilanDeger <= 0) {
        alert("Minimum değere ulaştınız!");
        sonuc.innerText = "0";
        sonuc_ınt = 0;
        return;
    }
    
    sonuc.innerText = azaltilanDeger;
})

