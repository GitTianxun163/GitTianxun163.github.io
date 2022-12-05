var topmar=document.getElementById("topmar")
var favico=document.createElement("img")
favico.src="/favicon.png"
favico.width = 40;
favico.height = 40;
topmar.appendChild(favico)

var addButton = function(text,link) {
    var button = document.createElement("a")
    button.className = "blank"
    button.innerText = text
    button.href = link
    topmar.appendChild(button)
    return button;
}

var homeButton = addButton("首页","/index.html")

var PojectsButton = addButton("我的项目","")