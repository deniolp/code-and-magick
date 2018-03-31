'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SIZE = 10;
var GAP_FONT_SIZE = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var INDENT = 50;
var OFFSET = 7;

var renderCloud = function (ctx, x, y, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + OFFSET, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - OFFSET);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - OFFSET, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + OFFSET);
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
  renderCloud(ctx, CLOUD_X + GAP_SIZE, CLOUD_Y + GAP_SIZE, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    var positionX = CLOUD_X + INDENT + (BAR_WIDTH + INDENT) * i;
    var positionY = CLOUD_Y + CLOUD_HEIGHT - GAP_SIZE - GAP_FONT_SIZE - barHeight;
    ctx.fillText(names[i], positionX, CLOUD_Y + CLOUD_HEIGHT - GAP_SIZE);

    var saturation = Math.random();
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + saturation + ')';
    ctx.fillRect(positionX, positionY, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), positionX, positionY - GAP_SIZE);
  }
};
