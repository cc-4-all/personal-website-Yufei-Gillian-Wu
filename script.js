var img = document.getElementById(" gallery-img ")
var prev = document.getElementById(" prev ")
var next = document.getElementById(" next ")


var images = ["746d777cccbe3e609bb99c87efa8b17f.1000x1000x1.png", "unnamed.jpg", "artworks-000361169454-z4djdq-t500x500.jpg", "channels4_profile.jpg"];

var currentimage = 0;

function changeimage(e) {
    if(e.target.id == "next" && currentimage !== images.length-1 ){
    currentimage = currentimage +1
    }


if (e.target.id == "prev" && currentimage !== 0) {
    currentimage = currentimage -1
}

img.setAttribute("src","images/" + images [currentimage]);

}
prev.addEventListener("click", changeimage);
next.addEventListener("click", changeimage);