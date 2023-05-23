$(function () {

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $('.navbar a, .hero-text a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // DIAPORAMA D'IMAGES
  $(function () {
    var images = document.querySelectorAll('.slideshow img');
    var currentImageIndex = 0;
  
    function changeImage() {
      // Réinitialisez l'opacité de toutes les images
      images.forEach(function (image) {
        image.classList.remove('active');
      });
  
      // Activez la prochaine image
      images[currentImageIndex].classList.add('active');
  
      // Incrémentez l'index de l'image courante
      currentImageIndex++;
  
      // Revenez à la première image si l'index dépasse le nombre d'images
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
    }
  
    // Affiche la première image immédiatement
    changeImage();
  
    // Changez l'image toutes les 3 secondes (ajustez le délai selon vos besoins)
    setInterval(changeImage, 3000);
  });
  

});
