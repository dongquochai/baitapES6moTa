let text = document.querySelector(".heading").innerHTML;
let charset = [...text];



let hoverH2 = () => {
  let content = "";
  for (let i in charset) {
    content += `<span>${charset[i]}</span>`;
  }
  
  document.querySelector(".heading").innerHTML = content;

  
};
hoverH2();