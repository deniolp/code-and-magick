'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var CLOUD_OFFSET = 7;
  var GAP_SIZE = 10;
  var GAP_FONT_SIZE = 20;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var STATISTIC_INDENT = 50;
  var COLOR_RED = 'rgba(255, 0, 0, 1)';
  var COLOR_WHITE = '#fff';
  var COLOR_BLACK = '#000';

  var renderCloud = function (ctx, x, y, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + CLOUD_OFFSET, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - CLOUD_OFFSET);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH - CLOUD_OFFSET, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_OFFSET);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.fill();
  };

  var getMaxElement = function (elements) {
    var maxElement = elements[0];

    for (var i = 0; i < elements.length; i++) {
      if (elements[i] > maxElement) {
        maxElement = elements[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP_SIZE, CLOUD_Y + GAP_SIZE, CLOUD_SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var barHeight = BAR_HEIGHT * times[i] / maxTime;
      var barPositionX = CLOUD_X + STATISTIC_INDENT + (BAR_WIDTH + STATISTIC_INDENT) * i;
      var barPositionY = CLOUD_Y + CLOUD_HEIGHT - GAP_SIZE - GAP_FONT_SIZE - barHeight;
      var saturation = Math.random();
      var colorBlue = 'rgba(0, 0, 255, ' + saturation + ')';

      ctx.fillText(names[i], barPositionX, CLOUD_Y + CLOUD_HEIGHT - GAP_SIZE);
      ctx.fillStyle = names[i] === 'Вы' ? COLOR_RED : colorBlue;
      ctx.fillRect(barPositionX, barPositionY, BAR_WIDTH, barHeight);
      ctx.fillStyle = COLOR_BLACK;
      ctx.fillText(Math.floor(times[i]), barPositionX, barPositionY - GAP_SIZE);
    }
  };
})();
