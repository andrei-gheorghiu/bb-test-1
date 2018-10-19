"use strict";

window.onload = function () {
  document.querySelector('#verticalCentering').addEventListener('input', function () {
    document.body.classList[this.checked ? 'add' : 'remove']('vertically-centered');
  });
  document.querySelector('#horizontalFlip').addEventListener('input', function () {
    document.body.classList[this.checked ? 'add' : 'remove']('horizontal-flip');
  });
  var cards = document.querySelectorAll('.card');

  for (var i = 0; i < cards.length; i++) {
    resizeCard(cards[i]);
    cards[i].addEventListener('click', function (event) {
      if (event.target.closest('.flipper')) {
        event.target.closest('.card').classList.toggle('is_flipped');
      }
    });
  }

  document.body.classList.remove('loading');

  window.onresize = function () {
    updateCards();
  };
};

function updateCards() {
  var cards = document.querySelectorAll('.card');

  for (var i = 0; i < cards.length; i++) {
    resizeCard(cards[i]);
  }
}

function resizeCard(card) {
  var face = card.querySelector('card-face');
  Object.assign(card.parentElement.style, {
    width: face.offsetWidth + 'px',
    height: face.offsetHeight + 'px'
  });
}
//# sourceMappingURL=meh.js.map
