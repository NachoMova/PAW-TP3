var window = window || {},
    document = document || {},
    console = console || {},
    Cryptogram = Cryptogram || {};

//Niveles del juego
var types = {
    'letters': {
        'title': 'Letras'
    },
    'numbers': {
        'title': 'Numeros'
    },
    'symbols': {
        'title': 'Simbolos'
    }
};

var abecedario= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

window.onload = function() {
  Cryptogram.init("cryptogram");
};

Cryptogram = {

  container: null,
  phraseContainer: null,
  urlJson: "phrases/archivo.json",
  type: 'letters',
  phrases: null,
  phrase: "Juro solemnemente que mis intenciones no son buenas",
  cryptogram: null,

  init: function(container) {

    this.container = window.document.getElementById(container);
    this.renderStructure();
    //this.getPhrases();
    this.generateCryptograph(this.type);
    this.generateGame(this.phrase);



  },

  renderStructure: function() {
    var header = document.createElement("header");
    header.classList.add('cryptogram__header');
    var headerLevels = document.createElement("div");
    headerLevels.classList.add('header-levels');
    const lv = Object.keys(types)
    for (const lvs of lv) {
      var button = document.createElement("button");
      button.classList.add('btn');
      button.id = lvs;
      button.addEventListener("click",this.changeType);
      button.innerHTML = types[lvs].title;
      headerLevels.appendChild(button);
    }

    this.container.appendChild(headerLevels);
    //Render del article - body
    var body = document.createElement("article");
    body.classList.add('cryptogram__content');

    var abc = document.createElement("div");
    abc.classList.add('cryptogram__content-abc');
    body.appendChild(abc);

    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var tbHeader = document.createElement("thead");
    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");
    for(let i = 0; i < abecedario.length; i++){
      var letter = document.createElement("th");
      letter.innerHTML = abecedario[i].toUpperCase();
      var empty = document.createElement("td");
      empty.innerHTML = "&nbsp;";
      empty.id = abecedario[i];
      row1.appendChild(letter);
      row2.appendChild(empty);
    }
    tbHeader.appendChild(row1);
    tbl.appendChild(tbHeader);
    tblBody.appendChild(row2);
    tbl.appendChild(tblBody);

    abc.appendChild(tbl);

    this.phraseContainer = document.createElement("div");
    this.phraseContainer.classList.add('cryptogram__content-phrase');
    body.appendChild(this.phraseContainer);

    this.container.appendChild(body);
    //Render del footer
  },

  getPhrases: function() {

  },

  generateCryptograph: function(type) {
    switch (type) {
      case 'letters':
      /**
       * Durstenfeld shuffle algorithm.
       */
        array = new Array();
        for (var i = abecedario.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1))
            var temp = abecedario[i]
            array[i] = abecedario[j]
            array[j] = temp
        }
        this.cryptogram = array;
        break;
      default:

    }
  },

  generateGame: function(phrase) {
    for (var i = 0; i < phrase.length; i += 1) {
      var div = document.createElement("div");
      if (phrase[i].trim().length  != 0) {
        div.classList.add('letter');
        let letter = phrase[i].toLowerCase();
        let index = abecedario.indexOf(letter);
        var input = document.createElement("input");
        input.size = 1;
        div.appendChild(input);
        var label = document.createElement("label");
        console.log(this.cryptogram[index]);
        label.innerHTML = this.cryptogram[index];
        div.appendChild(label);
      } else {
        div.classList.add('space');
        div.innerHTML = "&nbsp;";
      }

      this.phraseContainer.appendChild(div);

    }
  },

  changeType: function() {

  }

}
