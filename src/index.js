import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

const navA = document.querySelectorAll("nav a");
navA.forEach((a) => {
  a.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
    event.target.style.background = "yellow";
  });
});
