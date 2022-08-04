
console.log(2)

$(".bi-promo__slider").slick({

 // normal options...
 autoplay: true,
 dots: true,
 infinite: true,
 slidesToShow: 1,
 arrows: true,
 variableWidth: false,
 speed: 1200,
 prevArrow: `<svg class="slick-arrow slick-prev" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M10.75 1L1 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 <path d="M21.75 1L12 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 <path d="M10.75 34L1 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 <path d="M21.75 34L12 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 </svg> 
 `,
 nextArrow:
 `<svg class="slick-arrow slick-next" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M12 1L21.75 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 <path d="M1 1L10.75 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 <path d="M12 34L21.75 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 <path d="M1 34L10.75 17.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
 </svg>`,
 // adaptiveHeight: false,

 // the magic
 responsive: [{

     breakpoint: 1024,
     settings: {
       slidesToShow: 1,
       infinite: true,
       speed: 300,
       adaptiveHeight: true
     }

   }, {

     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       dots: true,
     }

   }, {

     breakpoint: 300,
     settings: "unslick" // destroys slick

   }]
});

$(".bi-experts__slider").slick({

  // normal options...
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  arrows: true,
  variableWidth: false,
  speed: 1200,
  prevArrow: `<svg class="slick-arrow slick-prev" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.75 1L1 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  <path d="M21.75 1L12 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  <path d="M10.75 34L1 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  <path d="M21.75 34L12 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  </svg> 
  `,
  nextArrow:
  `<svg class="slick-arrow slick-next" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1L21.75 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  <path d="M1 1L10.75 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 34L21.75 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  <path d="M1 34L10.75 17.5" stroke="#001529" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  // adaptiveHeight: false,
 
  // the magic
  responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        speed: 300,
        adaptiveHeight: true
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true,
      }
 
    }, {
 
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
 });

$('.single-item').slick();