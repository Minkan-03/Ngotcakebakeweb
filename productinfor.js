const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

// Slider
var index = 1;
changeImage = function(){
    var imgs = ["image/cake01.jpg","/image/cake02.jpg", "/image/cake03.jpg", "/image/cake04.jpg","/image/cake05.jpg","/image/cake06.jpg"];
    document.getElementById('img').src  = imgs[index];
    index++;
    if(index == 6){
        index = 0;
    }
}

setInterval(changeImage, 3000);
