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

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR = [
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
    coatColor: COAT_COLOR[generateRandomNumber(0, 5)],
    eyesColor: EYES_COLOR[generateRandomNumber(0, 4)]
  };
};

var characterList = [];
var setupBlock = document.querySelector('.setup');

setupBlock.classList.remove('hidden');

for (var i = 0; i < LIMIT_CHARACTERS; i++) {
  characterList.push(generateCharacter());
}
