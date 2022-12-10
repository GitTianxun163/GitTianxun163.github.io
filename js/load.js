var summonG = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://v1.jinrishici.com/all.txt');
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var gushici = document.getElementById('gushici');
        gushici.innerHTML = xhr.responseText+" "+"<a onclick='javascript:summonG()' class='ff'>(换一句)</a>";
    }
    };
    xhr.send();
}

document.getElementById("main").style.height = window.innerHeight;
summonG()