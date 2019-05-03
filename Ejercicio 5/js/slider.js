var window = window || {},
    document = document || {},
    console = console || {},
    Slider = Slider || {};

window.onload = function() {
  Slider.init("slider");
};


Slider = {

  slideIndex : 1,

  init: function () {

    var slider = window.document.getElementById('slider');
    this.setEffect(slider);
    this.renderArrows(slider);
    this.renderThumbs(slider);
    this.showSlide(this.slideIndex);

  },

  setEffect: function(slider) {
    var effect = slider.getAttribute('data-effect');
    var slides = window.document.getElementsByClassName('slide');
    for(var x=0; x < slides.length; x++)
    {
        slides[x].classList.add(effect);
    }

  },

  renderArrows: function (slider) {
    var prev = document.createElement("a");
    prev.innerHTML = '&#10094;';
    prev.classList.add('prev');
    prev.addEventListener("click",this.changeSlide);
    var next = document.createElement("a");
    next.innerHTML = '&#10095;';
    next.classList.add('next');
    next.addEventListener("click",this.changeSlide);
    slider.appendChild(prev);
    slider.appendChild(next);
  },

  renderThumbs: function (slider) {
    var div = document.createElement("div");
    div.classList.add('slider__thumbs');
    var imgs = window.document.getElementsByClassName('img-carrousel');
    for(var x=0; x < imgs.length; x++)
    {
        var span = document.createElement("span");
        span.classList.add('dot');
        span.setAttribute('data-slide', x);
        span.addEventListener("click",this.showSlide);
        div.appendChild(span);
    }

    slider.appendChild(div);


  },

  changeSlide: function(e) {

    console.log(e);

  },

  showSlide: function(n) {
    var i;
    var slides = window.document.getElementsByClassName('slide');
    var dots = window.document.getElementsByClassName('dot');
    if (n > slides.length) {this.slideIndex = 0}
    if (n < 0) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].classList.remove('active');
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].classList.add('active');
    dots[this.slideIndex-1].classList.add('active');

  }
}
