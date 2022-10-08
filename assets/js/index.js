var lnkEvent = document.getElementById('navLink');
lnkEvent.addEventListener('click', changePage);
function changePage()
{
    windows.location.href = './search.html';
}
$(document).ready(function () { 
  
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    navigation : true,
    loop: true,
    smartSpeed: 900
  });
 
});