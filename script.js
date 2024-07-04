let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add ('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}

var video = document.querySelector(".video");
var juice = document.querySelector(".juice");
var btn = document.getElementById("play-pause");

function togglePlayPause(){

    if(video.paused){
        btn.className = "pause";
        video.play();
    } else {
        btn.className="play";
        video.pause();
    }
}

btn.onclick = function(){
    togglePlayPause();
};

video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        BigInt.className = "play";
    }
})