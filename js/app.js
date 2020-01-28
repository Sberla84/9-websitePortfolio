 

const $modalPortfolio = $("#modal-creation");
const $portfolio = $("#portfolio");
const $webDesign = $("#web-design");
const $contacts = $("#contacts");
var $windowWidth =$(window).width();
var $windowHeight =$(window).height();
var w = 90;
var h = 55;


var txt;    // typewriter function string to write
var b = 0;    // typewriter index
var speed = 40;  // typewriter function speed

var $middleCell = $("#middle-cell"); // contacts middle hive cell 

const projects = [
  {
    title: "Tagliedettagli",
    description: "Hairdresser saloon's website",
    img: "img/ted-portfolio.png",
    webdesign: true,
    logodesign: true,
    photo:true,
    adress: "https://www.ariannazingone.it/",
    details: "For this project we started creating a new logo, then we we made some nice pictures, we did some editing to make them respect the layout and after we created a beautiful and simple website."
  },
  {
    title: "API Test",
    description: "Hairdresser saloon's website",
    img: "img/ted-portfolio.png",
    webdesign: true,
    logodesign: false,
    photo: false,
    adress: "https://www.ariannazingone.it/",
    details: "For this project we started creating a new logo, then we we made some nice pictures, we did some editing to make them respect the layout and after we created a beautiful and simple website."
  },
  {
    title: "Dashboard",
    description: "Hairdresser saloon's website",
    img: "img/ted-portfolio.png",
    webdesign: true,
    logodesign: false,
    photo: false,
    adress: "https://www.ariannazingone.it/",
    details: "For this project we started creating a new logo, then we we made some nice pictures, we did some editing to make them respect the layout and after we created a beautiful and simple website."
  },
  {
    title: "Weel of success",
    description: "Hairdresser saloon's website",
    img: "img/ted-portfolio.png",
    webdesign: true,
    logodesign: false,
    photo: false,
    adress: "https://www.ariannazingone.it/",
    details: "For this project we started creating a new logo, then we we made some nice pictures, we did some editing to make them respect the layout and after we created a beautiful and simple website."
  },
  {
    title: "Photo gallery",
    description: "Hairdresser saloon's website",
    img: "img/ted-portfolio.png",
    webdesign: true,
    logodesign: false,
    photo: false,
    adress: "https://www.ariannazingone.it/",
    details: "For this project we started creating a new logo, then we we made some nice pictures, we did some editing to make them respect the layout and after we created a beautiful and simple website."
  }

];

const webdesign = [
  {
    title: "Tailormade",
    description: "Every person, every business, from the little shop to the biggest industry, have different needs, different approach, different feels and your new website must be made following these rules so it fit perfectly the customer's 'body'. ",
    image: "img/mattia-tailormade-hd.png",
    svg: "icons/tailormade-detailed.svg"
  },
  {
    title: "Responsive",
    description: "We use plenty of different devices to navigate on internet, your new website must be a joy for the eyes of all visitors, beautiful and large on desktop screens, essential and well readable on mobile devices!.",
    image: "img/mattia-responsive-hd.png",
    svg: "icons/responsive-detailed.svg"
  },
  {
    title: "Unique",
    description: "Millions of persons and activities are present on internet, if you want to attract theyr attenction you must look different, a unique logo, unique pictures and unique look of your new website will make visitors sit and look everything you are showing! ",
    image: "img/kids-unique-hd.png",
    svg: "icons/unique-detailed.svg"
  },
  {
    title: "Easy",
    description: "The last word, but not the less important!! 'Make things easy' thats why the pc is born, do many things with few clicks, make interactions funny, you will be surprised on how easy you will interact with your new website, making even the most difficult tasks a relaxing walk on the Chianti hills!",
    image: "img/mattia-easy-hd.png",
    svg: "icons/easy-detailed.svg"
  }
]



// UTILITY
function responsiveWebdesign(){
  if ($windowWidth > 767){
    w = 50;
    h = 50;
  } else if ($windowWidth > 1023){
    w= 40;
    h= 50;
  }
  return(w,h);
}


$(window).resize(function(){
  $windowWidth = $(window).width();
  $windowHeight = $(window).height();
  
})



function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}


function animateContactsReset(){
  $('.instagram').fadeOut(100, function(){
    $('.email').fadeOut(100, function(){
      $('.github').fadeOut(100, function(){
        $('.whatsapp').fadeOut(100, function(){
          $('.linkedin').fadeOut(100, function(){
            $('.facebook').fadeOut(100);
          });
        });
      });
    });
  });
};


// PORTFOLIO


function createModalPortfolio(ind){
  $modalPortfolio.append("<div id='wrap'></div>");
  $('#wrap').append("<h1 class='modal-portfolio-title'>"+ projects[ind].title +"</h1>");
  $('#wrap').append("<p class='modal-portfolio-description'>"+ projects[ind].description +"</p>");
  $('#wrap').append("<img class='modal-portfolio-image' src='"+ projects[ind].img +"'>");
  $('#wrap').append("<h4 class='modal-portfolio-services-used'>SERVICES USED</h4>");
  $('#wrap').append("<div class='modal-portfolio-skills-container'>");
    if (projects[ind].webdesign){
      let $skillContainer = $(".modal-portfolio-skills-container");
      $skillContainer.append("<div class='modal-portfolio-skill-box'><img src='icons/webD-white-ico.svg' class='modal-portfolio-skill-icon'><p>WEB DESIGN</p></div>");
    };
    if (projects[ind].logodesign){
      let $skillContainer = $(".modal-portfolio-skills-container");
      $skillContainer.append("<div class='modal-portfolio-skill-box'><img src='icons/logoD-ico.svg' class='modal-portfolio-skill-icon'><p>LOGO DESIGN</p></div>");
    };
    if (projects[ind].photo){
      let $skillContainer = $(".modal-portfolio-skills-container");
      $skillContainer.append("<div class='modal-portfolio-skill-box'><img src='icons/photo-ico.svg' class='modal-portfolio-skill-icon'><p>PHOTO EDITING</p></div>");
    };
    $('#wrap').append("<p class='modal-portfolio-detailed'>"+ projects[ind].details +"</p>");
    $('#wrap').append("<div class='modal-portfolio-buttons-container'><a class='close-modal button'>Close</a><a class='visit-modal button' target='blanc' href='"+ projects[ind].adress +"'>Visit</a></div>");
}

function createPortfolio(){
  var offset;
  if ($windowWidth < 1024){
    offset = 200;
  } else {
    offset= 300;
  }
  for (let x = 0; x < projects.length; x++){
    if (isEven(x)){
      $portfolio.append("<div class='portfolio-single-container' data-aos='slide-up' data-aos-offset='"+ offset +"'> <div class='test index-"+ x +"'></div><div><p class='project-title-even'>"+ projects[x].title +"</p><a class='details button' index='"+ x +"'>Details</a> <a class='visit button' target='blanc' href='"+ projects[x].adress +"'>Visit</a></div></div>");
    } else {
      $portfolio.append("<div class='portfolio-single-container' data-aos='slide-up' data-aos-offset='"+ offset +"'> <div><p class='project-title-odd'>"+ projects[x].title +"</p><a class='details button'   index='"+ x +"'>Details</a> <a class='visit button' target='blanc' href='"+ projects[x].adress +"'>Visit</a></div><div class='test index-"+ x +"'></div></div>");
    };
  }
  $portfolio.append("<div class='space-bottom'></div>");
}






$(document).ready(function(){
  $portfolio.fadeOut(100);

  setTimeout(function(){
    createPortfolio();
  },100);
 
  $portfolio.on('click', ".details", function(){
    i = $(this).attr("index");
    createModalPortfolio(i);
    $modalPortfolio.slideDown();
    $('#main-header').fadeOut();
    $('#portfolio').fadeOut();
    $('#main-footer').fadeOut();
  })
})

$modalPortfolio.on("click", ".close-modal", function(){
  $modalPortfolio.slideUp("normal", function() { $('#wrap').remove(); } );
  $('#main-header').fadeIn();
  $('#portfolio').fadeIn();
  $('#main-footer').fadeIn();
})

$("#menu-portfolio").click(function(){
  animateContactsReset();
  $webDesign.fadeOut();
  $contacts.fadeOut();
  $portfolio.fadeIn();
});




//////////////////////////   WEBDESIGN


$("#menu-webdesign").click(function(){
  $contacts.fadeOut(100);
  animateContactsReset();
  responsiveWebdesign();
  $('#outer-cell').fadeOut();
  $portfolio.fadeOut();
  $("#main-nav").slideUp();
  $webDesign.fadeIn();
  $('.inner').fadeIn(500);
});

function createModalWebdesign(index,width){
  if (width < 768){
  $("#webdesign-modal").append("<div class='webdesign-modal-true'><div class='webdesign-modal-box-big'><h1 class='webdesign-modal-box-title '>"+ webdesign[index].title +"</h1><p id='description' class='webdesign-modal-box-description'></p><img class='webdesign-modal-img' src='"+ webdesign[index].image +"'></div></div>");
  } else {
  $("#webdesign-modal").append("<div class='webdesign-modal-true'><div class='webdesign-modal-box-big'><h1 class='webdesign-modal-box-title '>"+ webdesign[index].title +"</h1><p id='description' class='webdesign-modal-box-description'></p><img class='webdesign-modal-img' src='"+ webdesign[index].svg +"'></div></div>");
  $('#webdesign-modal').append("<img class='webdesign-modal-desktop-image' src='"+  webdesign[index].image  +"'></img>");
  }
};


function typeWriter() {
  if (b < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(b);
    b++;
    setTimeout(typeWriter, speed);
  } 
}

function webdesignModalFadeIn(h,w){
  b = 0;
  $('.webdesign-modal-true').fadeIn();
    $('.webdesign-modal-desktop-image').fadeIn();
    $('.webdesign-modal-box-big').animate({
      height : h+"vh" ,     
      width : w+"vw"       
  },500, typeWriter());
}

function webdesignModalFadeOut(){
  $('.webdesign-modal-box-big').animate({
    height: '5vh',
    width: '4vw'
},300);
$('.webdesign-modal-desktop-image').fadeOut();
$('.webdesign-modal-img').fadeOut(100);
$('.webdesign-modal-true').fadeOut();
setTimeout(function() {
  $('.webdesign-modal-true').remove();
  $('.webdesign-modal-desktop-image').remove();
}, 300);
;}

$(".modal-webdesign-main-menu-return").on('click', function(){
  $('.inner').slideUp(function(){$("#main-nav").fadeIn()
    });
  webdesignModalFadeOut()
  

});

$('.menu-buttons').on('click', function(){
    webdesignModalFadeOut()
    let z = $(this).attr("index");
    txt = webdesign[z].description;
    setTimeout(function() {
    createModalWebdesign(z,$windowWidth);
    webdesignModalFadeIn(h,w);
    }, 301);
});

// SOCIAL SECTION

function animateContacts(){
  setTimeout(function(){
    $('.instagram').fadeIn(300, function(){
      $('.email').fadeIn(300, function(){
        $('.github').fadeIn(300, function(){
          $('.whatsapp').fadeIn(300, function(){
            $('.linkedin').fadeIn(300, function(){
              $('.facebook').fadeIn(300);
            });
          });
        });
      });
    });
  },400);
 };




$('#menu-contacts').on('click', function(){
  $portfolio.fadeOut();
  $contacts.fadeIn(animateContacts());
});


 




// AOS Animated scroll library


AOS.init();


// PARTICLES 


 particlesJS("particles-js", {
    "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#d9488b"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  });