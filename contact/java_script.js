burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-navbar');
    rightNav.classList.toggle('v-navbar');
    navbar.classList.toggle('h-navbar');
})
