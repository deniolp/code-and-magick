'use strict';

(function () {
  var LIMIT_CHARACTERS = 4;

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

  var generateEyesColor = function () {
    return EYES_COLORS[window.utils.generateRandomNumber(0, EYES_COLORS.length - 1)];
  };

  var generateFireballColor = function () {
    return FIREBALL_COLORS[window.utils.generateRandomNumber(0, FIREBALL_COLORS.length - 1)];
  };

  var createCharacterElement = function (template, object) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = object.name;
    element.querySelector('.wizard-coat').style.fill = object.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = object.colorEyes;
    return element;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < LIMIT_CHARACTERS; i++) {
      fragment.appendChild(createCharacterElement(characterTemplate, wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setupSimilarBlock.classList.remove('hidden');
  };

  var setupElement = document.querySelector('.setup');
  var form = setupElement.querySelector('.setup-wizard-form');
  var setupSimilarBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var setupWizardEyesElement = setupElement.querySelector('.wizard-eyes');
  var eyesColorInputElement = setupElement.querySelector('input[name = eyes-color]');
  var setupFireballWrapElement = setupElement.querySelector('.setup-fireball-wrap');
  var fireballColorInputElement = setupElement.querySelector('input[name = fireball-color]');

  setupWizardEyesElement.addEventListener('click', function () {
    setupWizardEyesElement.style.fill = generateEyesColor();
    eyesColorInputElement.value = setupWizardEyesElement.style.fill;
  });

  setupFireballWrapElement.addEventListener('click', function () {
    fireballColorInputElement.value = generateFireballColor();
    setupFireballWrapElement.style.backgroundColor = fireballColorInputElement.value;
  });

  window.backend.load(onLoad);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setupElement.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
