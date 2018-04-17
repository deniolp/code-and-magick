'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem;
  var artifactsElement = document.querySelector('.setup-artifacts');

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() !== 'img') {
      return;
    }

    draggedItem = evt.target.cloneNode(true);
    artifactsElement.style.outline = '2px dashed red';
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  });

  shopElement.addEventListener('dragend', function () {
    artifactsElement.style.outline = '';
    draggedItem = null;
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';

    if (!evt.target.hasChildNodes() && evt.target.tagName.toLowerCase() !== 'img') {
      evt.target.appendChild(draggedItem);
    }

    artifactsElement.style.outline = '';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    if (!evt.target.hasChildNodes() && evt.target.tagName.toLowerCase() !== 'img') {
      evt.target.style.backgroundColor = 'yellow';
    }

    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
