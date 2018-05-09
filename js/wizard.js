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

  var setupElement = document.querySelector('.setup');

  var setupWizardEyesElement = setupElement.querySelector('.wizard-eyes');
  var eyesColorInputElement = setupElement.querySelector('input[name = eyes-color]');
  var setupFireballWrapElement = setupElement.querySelector('.setup-fireball-wrap');
  var fireballColorInputElement = setupElement.querySelector('input[name = fireball-color]');
  var setupWizardCoatElement = setupElement.querySelector('.wizard-coat');
  var coatColorInputElement = setupElement.querySelector('input[name = coat-color]');

  var wizard = {
    eyesPressHandler: function () {},
    coatPressHandler: function () {}
  };

  setupWizardEyesElement.addEventListener('click', function () {
    var newColor = generateEyesColor();
    setupWizardEyesElement.style.fill = newColor;
    eyesColorInputElement.value = newColor;
    wizard.eyesPressHandler(newColor);
  });

  setupFireballWrapElement.addEventListener('click', function () {
    fireballColorInputElement.value = generateFireballColor();
    setupFireballWrapElement.style.backgroundColor = fireballColorInputElement.value;
  });

  setupWizardCoatElement.addEventListener('click', function () {
    var newColor = generateCoatColor();
    setupWizardCoatElement.style.fill = newColor;
    coatColorInputElement.value = newColor;
    wizard.coatPressHandler(newColor);
  });

  window.wizard = wizard;
})();
