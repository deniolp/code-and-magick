'use strict';

var LIMIT_CHARACTERS = 4;
var CHARACTERS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var CHARACTERS_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateName = function () {
  return CHARACTERS_NAMES[generateRandomNumber(0, CHARACTERS_NAMES.length - 1)] + ' ' + CHARACTERS_SURNAMES[generateRandomNumber(0, 7)];
};

var generateCoatColor = function () {
  return COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length - 1)];
};

var generateEyesColor = function () {
  return EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length - 1)];
};

var generateFireballColor = function () {
  return FIREBALL_COLORS[generateRandomNumber(0, FIREBALL_COLORS.length - 1)];
};

var generateCharacter = function () {
  return {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  };
};

var createCharacterElement = function (template, object) {
  var element = template.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = object.name;
  element.querySelector('.wizard-coat').style.fill = object.coatColor;
  element.querySelector('.wizard-eyes').style.fill = object.eyesColor;
  return element;
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupElement.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupElement.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

var characterList = [];
var setupSimilarBlock = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setupOpenElement = document.querySelector('.setup-open');
var setupElement = document.querySelector('.setup');
var setupCloseElement = setupElement.querySelector('.setup-close');
var userNameInputElement = setupElement.querySelector('.setup-user-name');
var setupWizardEyesElement = setupElement.querySelector('.wizard-eyes');
var eyesColorInputElement = setupElement.querySelector('input[name = eyes-color]');
var setupFireballWrapElement = setupElement.querySelector('.setup-fireball-wrap');
var fireballColorInputElement = setupElement.querySelector('input[name = fireball-color]');

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInputElement.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

userNameInputElement.addEventListener('focusout', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

setupWizardEyesElement.addEventListener('click', function () {
  setupWizardEyesElement.style.fill = generateEyesColor();
  eyesColorInputElement.value = setupWizardEyesElement.style.fill;
});

setupFireballWrapElement.addEventListener('click', function () {
  fireballColorInputElement.value = generateFireballColor();
  setupFireballWrapElement.style.backgroundColor = fireballColorInputElement.value;
});

for (var i = 0; i < LIMIT_CHARACTERS; i++) {
  characterList.push(generateCharacter());
}

for (var j = 0; j < LIMIT_CHARACTERS; j++) {
  fragment.appendChild(createCharacterElement(characterTemplate, characterList[j]));
}

similarListElement.appendChild(fragment);
setupSimilarBlock.classList.remove('hidden');
