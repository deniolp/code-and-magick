'use strict';

(function () {
  var LIMIT_CHARACTERS = 4;

  var setupSimilarBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createCharacterElement = function (template, object) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = object.name;
    element.querySelector('.wizard-coat').style.fill = object.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = object.colorEyes;

    element.addEventListener('mouseenter', function () {
      window.wizardsArtifacts.show(object.artifacts);
    });
    element.addEventListener('mouseleave', function () {
      window.wizardsArtifacts.hide();
    });

    return element;
  };

  window.render = function (wizards) {
    var fragment = document.createDocumentFragment();

    similarListElement.innerHTML = '';

    for (var i = 0; i < LIMIT_CHARACTERS; i++) {
      fragment.appendChild(createCharacterElement(characterTemplate, wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setupSimilarBlock.classList.remove('hidden');
  };
})();
