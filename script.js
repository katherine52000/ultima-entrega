let menu = document.querySelector('#menu-bars');
let nabvar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nabvar.classList.toggle('active');
}

let section  = document.queryselectorAll('section');
let navLinks  = document.queryselectorAll('header .navbar a');





window.onscroll = () =>{

    menu.classList.remove('fa-times');
    nabvar.classList.remove('active');

    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
        links.classList.remove('active');
        document.queryselector('header .navbar a[href]*='+id+']').classList.add('active');



        });

      }

    });
      
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });



  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20    ,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    
    loop:true,
    breakpoints: {
      0:{
        slidesPerView:1,
      },
  640: {
    slidesPerView:2,
  },
768:{
  slidesPerView:2,
},
1024:{
  slidesPerView: 3

},


    },
  });
 function loader(
 })












  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  Function fadeOut(){
    setInterval(loader,3000)
  }


window.onload = fadeOut;


