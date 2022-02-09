const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];
let colorItem = document.getElementById("colorContainer") ;
let loadColor = () => {
  for (let i in colorList) {
    if (i == 0) {
        colorItem.innerHTML += "<button class = 'color-button "+ colorList[i] +" active'></button>";
    } else {
        colorItem.innerHTML += "<button class = 'color-button "+ colorList[i] +"'></button>";
    }
  }
};
loadColor();


 let colorBTN = document.getElementsByClassName("color-button");
 
 for (let i = 0; i < colorBTN.length; i++)
 
 colorBTN[i].addEventListener("click", function () {
   changeColor(colorList[i], i);
  });
  
  let house = document.getElementById("house");
  
 changeColor = (i, j) => {
   for (let i = 0; i < colorBTN.length; i++)
     colorBTN[i].classList.remove("active");
   colorBTN[j].classList.add("active"), (house.className = "house " + i);
 };