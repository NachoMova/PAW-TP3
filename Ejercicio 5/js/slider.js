var window = window || {},
    document = document || {},
    console = console || {},
    Slider = Slider || {};

window.onload = function() {
  Slider.init("slider");
};


Slider = {

  index : 0,
  time: 1000,
  loop: null,
  effect: 'fade',
  slides: null,
  dots: null,

  init: function () {

    var slider = window.document.getElementById('slider');
    this.setEffect(slider);
    this.renderArrows(slider);
    this.renderThumbs(slider);
    this.showSlide(0);
    this.time = slider.getAttribute('data-time');
    this.loop = setInterval(function(){
      Slider.showSlide(Slider.index+1);
    }, parseInt(this.time));

  },

  setEffect: function(slider) {
    var effect = slider.getAttribute('data-effect');
    Slider.slides = window.document.getElementsByClassName('slide');
    for(var x=0; x < Slider.slides.length; x++)
    {
        Slider.slides[x].classList.add(effect);
    }

  },

  renderArrows: function (slider) {
    var prev = document.createElement("a");
    prev.innerHTML = '&#10094;';
    prev.classList.add('prev');
    prev.id = 'prev-slide';
    prev.setAttribute('data-move', -1);
    prev.addEventListener("click",this.changeSlide);
    var next = document.createElement("a");
    next.innerHTML = '&#10095;';
    next.classList.add('next');
    next.id = 'next-slide';
    next.setAttribute('data-move', 1);
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
        span.id = 'dot-' + x;
        span.setAttribute('data-slide', x);
        span.addEventListener("click",this.goTo);
        div.appendChild(span);
    }

    slider.appendChild(div);


  },

  changeSlide: function(e) {

    var action = (document.getElementsByClassName(e.target.className)[0]).getAttribute('data-move');
    var index =Slider.index + parseInt(action);
    Slider.showSlide(index);
    clearTimeout( Slider.loop );
    Slider.loop = setInterval(function(){
                    Slider.showSlide(Slider.index+1);
                  }, parseInt(Slider.time));

  },

  goTo: function(e) {
    var index = (document.getElementById(e.target.id)).getAttribute('data-slide');
    Slider.showSlide(index);
    clearTimeout( Slider.loop );
    Slider.loop = setInterval(function(){
                    Slider.showSlide(Slider.index+1);
                  }, parseInt(Slider.time));

  },

  showSlide: function(index) {
    var i;

    var newIndex = (index)%Slider.slides.length;

    Slider.slides[Slider.index].classList.remove('active');
    Slider.slides[newIndex].classList.add('active');

    // Slider.slides[newIndex].classList.add('active');
    // Slider.slides[Slider.index].classList.remove('active');

    Slider.index = newIndex;

  }
}
