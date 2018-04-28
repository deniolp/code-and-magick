'use strict';

(function () {

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var generateEyesColor = function () {
    return EYES_COLORS[window.utils.generateRandomNumber(0, EYES_COLORS.length - 1)];
  };

  var generateFireballColor = function () {
    return FIREBALL_COLORS[window.utils.generateRandomNumber(0, FIREBALL_COLORS.length - 1)];
  };

  var generateCoatColor = function () {
    return COAT_COLORS[window.utils.generateRandomNumber(0, COAT_COLORS.length - 1)];
  };

  var successHandler = function (data) {
    wizards = data;
    window.render(wizards);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '35px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var setupElement = document.querySelector('.setup');
  var form = setupElement.querySelector('.setup-wizard-form');

  var setupWizardEyesElement = setupElement.querySelector('.wizard-eyes');
  var eyesColorInputElement = setupElement.querySelector('input[name = eyes-color]');
  var setupFireballWrapElement = setupElement.querySelector('.setup-fireball-wrap');
  var fireballColorInputElement = setupElement.querySelector('input[name = fireball-color]');
  var setupWizardCoatElement = setupElement.querySelector('.wizard-coat');
  var coatColorInputElement = setupElement.querySelector('input[name = coat-color]');

  var wizards = [];

  setupWizardEyesElement.addEventListener('click', function () {
    setupWizardEyesElement.style.fill = generateEyesColor();
    eyesColorInputElement.value = setupWizardEyesElement.style.fill;
  });

  setupFireballWrapElement.addEventListener('click', function () {
    fireballColorInputElement.value = generateFireballColor();
    setupFireballWrapElement.style.backgroundColor = fireballColorInputElement.value;
  });

  setupWizardCoatElement.addEventListener('click', function () {
    setupWizardCoatElement.style.fill = generateCoatColor();
    coatColorInputElement.value = setupWizardCoatElement.style.fill;
  });

  window.backend.load(successHandler, errorHandler);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setupElement.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });
})();
