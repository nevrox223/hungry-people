$(function() {
    //задание заполнителя с помощью параметра placeholder
    $("#date").mask("99.99.9999", {placeholder: "dd.nn.yyyy" });
    //задание заполнителя с помощью параметра placeholder
    $("#index").mask("999999", {placeholder: "+380" });
  });

  $(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $(".phone").mask("+380(99) 999-9999");
  });

  // $(document).ready(function(){
  //   $('.chokolate__wrapper').slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   });
  // });

    // document.addEventListener('DOMContentLoaded', function () {
    //   // инициализация слайдера
    //   var slider = new SimpleAdaptiveSlider('.chokolate', {
    //     autoplay: true,
    //     interval: 10000,
    //   });
    // });


    var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

