'use strict';

(function () {
  var artifactsBlockElement = document.querySelector('.similar-wizards-artifacts');

  var renderArtifact = function (data) {
    var artifactElement = document.createElement('li');

    artifactElement.classList.add('artifacts-item');
    artifactElement.textContent = data.description;

    return artifactElement;
  };

  var renderArtifacts = function (data) {
    var artifactsFragment = document.createDocumentFragment();
    var artifacts = data;

    artifacts.forEach(function (artifact) {
      artifactsFragment.appendChild(renderArtifact(artifact));
    });

    return artifactsFragment;
  };

  var showArtifacts = function (data) {
    artifactsBlockElement.classList.remove('hidden');
    artifactsBlockElement.innerHTML = '';

    var artifactsList = document.createElement('ul');

    artifactsList.classList.add('artifacts-list');
    artifactsList.appendChild(renderArtifacts(data));
    artifactsBlockElement.appendChild(artifactsList);
  };

  var hideArtifacts = function () {
    artifactsBlockElement.classList.add('hidden');
  };

  window.wizardsArtifacts = {
    show: showArtifacts,
    hide: hideArtifacts
  };
})();
