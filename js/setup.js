'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setupElement.classList.remove('hidden');

    document.addEventListener('keydown', popupEscPressHandler);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
    setupElement.style = '';

    document.removeEventListener('keydown', popupEscPressHandler);
  };

  var setupOpenElement = document.querySelector('.setup-open');
  var setupElement = document.querySelector('.setup');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var userNameInputElement = setupElement.querySelector('.setup-user-name');

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
    document.removeEventListener('keydown', popupEscPressHandler);
  });

  userNameInputElement.addEventListener('focusout', function () {
    document.addEventListener('keydown', popupEscPressHandler);
  });

})();
