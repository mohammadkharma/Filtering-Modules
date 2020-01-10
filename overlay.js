var openBtns = document.getElementsByClassName('open-btn');

for (var i = 0; i < openBtns.length; i++) {
    var button = openBtns[i];
    button.addEventListener('click', openNav);
}

function openNav(event) {
    var clickedBtn = event.target;
    var title = clickedBtn.parentElement.parentElement.getElementsByClassName('title')[0].innerText;
    var time = clickedBtn.parentElement.parentElement.getElementsByClassName('time')[0].innerText.replace('Time:', '');
    var price = clickedBtn.parentElement.parentElement.getElementsByClassName('price')[0].innerText.replace('Cost:', '');
    var overlayTitle = document.getElementById("overlay-title");
    var overlayTime = document.getElementById("overlay-time");
    var overlayPrice = document.getElementById("overlay-price");
    
    overlayTitle.innerText = title;
    overlayTime.innerText = time;
    overlayPrice.innerText = price;
    
    console.log(title, time, price);
    document.getElementById("myNav").style.width = "65%";
}

var closeBtn = document.getElementsByClassName('close-btn')[0];
closeBtn.addEventListener('click', closeNav);

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}