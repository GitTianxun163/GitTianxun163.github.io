var topmar=document.getElementById("topmar")
var favico=document.createElement("img")
favico.src="/favicon.png"
favico.width = 40;
favico.height = 40;
topmar.appendChild(favico)

var homeButton = document.createElement("a")
homeButton.className = "blank"
homeButton.innerText = "首页"
homeButton.href = "/index.html"
topmar.appendChild(homeButton)