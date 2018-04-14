'use strict';

var setupElement = document.querySelector('.setup');
var dialogHandle = setupElement.querySelector('.setup-user-pic');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  //  Здесь координаты места, где в первый раз нажата мышка

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    //  Здесь он считает, на какое расстояние мы подвинули элемент

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
    setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
