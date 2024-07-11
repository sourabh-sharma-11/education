const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const containers = document.querySelectorAll(".container");
var sliderNav = function(manual){
    btns.forEach((btn) => {
     btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
       });
       containers.forEach((container) => {
        container.classList.remove("active");
       });
       btns[manual].classList.add("active");
       slides[manual].classList.add("active");
       containers[manual].classList.add("active");
    }
       btns.forEach((btn, i) =>{
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
       });
       let sliderInterval;
       const startSlideShow = () =>{
        sliderInterval = setInterval (() =>{
        sliderNav (i)
        }, 2000);
       };
       startSlideShow();
       window.addEventListener('scroll', function(){
         let navbar = document.getElementById('menu-bar');
        if(window.pageYOffset >= 80){
            navbar.classList.add('sticky');
        }
       })
       let signUpBtn = document.querySelector('.signupbtn');
       let signInBtn = document.querySelector('.signinbtn');
       let nameField = document.querySelector('.namefield');
       let title = document.querySelector('.title');
       let underline = document.querySelector('.underline');
       let text = document.querySelector('.text');
       signInBtn.addEventListener('click',() =>{
        nameField.style.maxHeight = '0';
        title.innerHTML = 'sign In';
        text.innerHTML = 'Forget password';
        signUpBtn.classList.add('disable');
        signInBtn.classList.remove('disable');
        underline.style.transform = 'translateX(35px)'
       });
       signUpBtn.addEventListener('click',() =>{
        nameField.style.maxHeight = '60px';
        title.innerHTML = 'sign Up';
        text.innerHTML = 'Password Suggestion';
        signUpBtn.classList.remove('disable');
        signInBtn.classList.add('disable');
        underline.style.transform = 'translateX(0)';
       });