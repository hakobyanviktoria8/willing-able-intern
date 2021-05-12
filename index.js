function openMenu() {
    document.getElementById("rightMenu").style.width = "320px";
    console.log("here")
}

function closeMenu() {
    document.getElementById("rightMenu").style.width = "0";
}

//Get the button
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//carusel slick
$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow : '<a href="" class="left_arrow"><i class="fas fa-chevron-left"></i></a>',
        nextArrow : '<a href="" class="right_arrow"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});