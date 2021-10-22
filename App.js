// loader Section 
window.addEventListener("load",()=>{
  const Loader=document.querySelector(".Loader_Container")
  Loader.classList.add("loaderFinish")
})
const Videos=document.querySelectorAll(".videos video")
Videos.forEach(video=>{
  
  video.addEventListener("mouseenter",(e)=>{
    e.target.muted="true"
    e.target.play()
  })
  video.addEventListener("mouseleave",(e)=>{

    e.target.pause()
  })

})
// For Slider Swiper 
const Homeswiper = new Swiper(".HomeSwiper",{
    navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
    },
    autoplay: {
  delay: 5000,
  disableOnInteraction: false,
},

    loop:true,
    pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
}

)


var Moldswiper = new Swiper(".Mold_project_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next ',
    prevEl: '.swiper-button-prev ',
},
  pagination: {
    el: ".swiper-pagination_Mold",
    clickable: true,
  },

  breakpoints: {  
    "300": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
      
  },
  
 
});

// make btnHamburger Active and DeActive
const Navbar=document.querySelector(".nav")
const BtnHamburger=document.querySelector(".BtnHamburger")
BtnHamburger.addEventListener("click",()=>{
    BtnHamburger.classList.toggle("active")
    Navbar.classList.toggle("open")
})




// Scroll Animation
AOS.init({
    startEvent: 'DOMContentLoaded',
    offset: 120,
    delay: 0,
    duration:2000
});





// Smooth Scroll 
const Header=document.querySelector("header")
const HeaderHeight=Header.getBoundingClientRect().height

var scroll = new SmoothScroll('.nav_item .nav_link[href*="#"]',{
  header:Header,
  offset:HeaderHeight,
  easing: 'Linear'
});





