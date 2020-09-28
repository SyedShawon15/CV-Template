var navslide = () => {
  var burger = document.querySelector('.nav-burger');
  var nav = document.querySelector('.nav-links');
  var navlinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    //Aninmation Links
    navlinks.forEach((link, index) =>{
      if(link.style.animation){
          link.style.animation = '';
      }else{
          link.style.animation = `navLinksFade 0.5s ease forwards ${index /7 + 0.9}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}
navslide();