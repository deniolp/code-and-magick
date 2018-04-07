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

var generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateCharacter = function () {
  return {
    name: CHARACTERS_NAMES[generateRandomNumber(0, 7)] + ' ' + CHARACTERS_SURNAMES[generateRandomNumber(0, 7)],
    coatColor: COAT_COLORS[generateRandomNumber(0, 5)],
    eyesColor: EYES_COLORS[generateRandomNumber(0, 4)]
  };
};

var createCharacterElement = function (template, object) {
  var element = template.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = object.name;
  element.querySelector('.wizard-coat').style.fill = object.coatColor;
  element.querySelector('.wizard-eyes').style.fill = object.eyesColor;
  return element;
};

var characterList = [];
var setupBlock = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

setupBlock.classList.remove('hidden');

for (var i = 0; i < LIMIT_CHARACTERS; i++) {
  characterList.push(generateCharacter());
}

for (var j = 0; j < LIMIT_CHARACTERS; j++) {
  fragment.appendChild(createCharacterElement(characterTemplate, characterList[j]));
}

similarListElement.appendChild(fragment);
setupSimilarBlock.classList.remove('hidden');
