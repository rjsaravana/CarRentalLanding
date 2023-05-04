const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const ShowHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 25;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => ShowHideIcons(), 60);
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carousel.ScrollLeft;
}


const dragging = (e) => {
    if (!isDragStart) return;
    e.praventDefault();
    carousel.classList.add("dragging")
    let positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    ShowHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown ", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);





const arrows = document.querySelectorAll(".arrow");
const container = document.querySelectorAll(".container");

arrows.forEach((arrow, i) => {
    const ItemNo = container[i].querySelectorAll("img").length;
    let clickitem = 0;
    arrow.addEventListener("click", () => {
        clickitem++;
        if (ItemNo - (5 + clickitem) >= 0) {
            container[i].style.transform = `translateX(${container[i].computedStyleMap().get("transform")[0].x.value
                - 455}px)`;
        } else {
            container[i].style.transform = "translateX(0)";
            clickitem = 0;
        }
    });
});



const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    // mousewheel: true

    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // breakpoints: {
    //     640:{
    //         slidesPerView: 2,
    //         spaceBetween:10,
    //     },
    //     820:{
    //         slidesPerView: 1,
    //         spaceBetween:120,
    //     },
    //     1024:{
    //         slidesPerView:8,
    //         spaceBetween:20,
    //     }
    // },
});
