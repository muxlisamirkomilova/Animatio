// var stars = document.querySelectorAll('.star a');
// stars.forEach((item, index1) => {
//     item.addEventListener('click', () => {
//         stars.forEach((star, index2) => {
//             if (index1 >= index2) {
//                 star.classList.add('active');
//             } else {
//                 star.classList.remove('active');
//             }
//         });
//     });
// });  


// let nike1 = document.getElementById('nike1');
// let nike2 = document.getElementById('nike2');
// let nike3 = document.getElementById('nike3');

// let img = document.getElementById('img');

// nike1.addEventListener('click', () => {
//     img.src = "usama-akram-kP6knT7tjn4-unsplash-removebg 1.png";
// });

// nike2.addEventListener('click', () => {
//     img.src = "6.png";
// });

// nike3.addEventListener('click', () => {
//     img.src = "3.png";
// });
// let images = document.querySelectorAll('.image');

// images.forEach((image, index) => {
//   image.addEventListener('click', () => {
//     document.querySelectorAll('.img').style.backgroundImage = image.style.backgroundImage;
//   });
// });
// function toggleMenu() {
//   var nav = document.getElementById('navbar');
//   nav.classList.toggle('active');
// }
// function toggleMenu() {
//   var nav = document.getElementById('navbar');
//   nav.classList.toggle('active');
// }
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// function changeBackground(imageUrl) {
//   document.getElementById('imageContainer').style.backgroundImage = "url('" + imageUrl + "')";
// }

let header = document.getElementById('header');
let headers = document.getElementsByTagName('header');
let nike1 = document.getElementById('nike1');
let nike2 = document.getElementById('nike2');
let nike3 = document.getElementById('nike3');

nike1.addEventListener('click', () => {
  header.style.color = "green";
  for (let i = 0; i < headers.length; i++) {
    headers[i].style.backgroundColor = "#EBFFE4";
  }
});

nike2.addEventListener('click', () => {
  header.style.color = "red";
  for (let i = 0; i < headers.length; i++) {
    headers[i].style.backgroundColor = "#791604";
  }
});

nike3.addEventListener('click', () => {
  header.style.color = "black";
  for (let i = 0; i < headers.length; i++) {
    headers[i].style.backgroundColor = "#6e6867";
  }
});



// function showSlides(n) {
//   let i;
//   let slides = document.querySelectorAll('.item8');
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

// function toggleMenu() {
//   var nav = document.querySelector('.header__nav-list');
//   if (nav.style.display === 'flex') {
//     nav.style.display = 'none';
//   } else {
//     nav.style.display = 'flex';
//   }
// }


let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.item8');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa-regular fa-circle-pause fa-beat fa-sm razmer " style="color: #5ceb3a;"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-circle-play fa-beat fa-sm  razmer"style="color: #5Ceb3A;"></i>';
  }
}


var stars = document.querySelectorAll('.star');

stars.forEach((star) => {
  star.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    stars.forEach((s) => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});
var stars1 = document.querySelectorAll('.star1');

stars1.forEach((star) => {
  star.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    stars1.forEach((s) => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});
var stars2 = document.querySelectorAll('.star2');

stars2.forEach((star) => {
  star.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    stars2.forEach((s) => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});
var stars3 = document.querySelectorAll('.star3');

stars3.forEach((star) => {
  star.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    stars3.forEach((s) => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});
var stars4 = document.querySelectorAll('.star4');

stars4.forEach((star) => {
  star.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    stars4.forEach((s) => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});
var stars5 = document.querySelectorAll('.star5');

stars5.forEach((star) => {
  star.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    stars5.forEach((s) => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});

