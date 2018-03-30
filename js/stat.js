'use strict';

var CLOUD_WIDTH = 320;
var CLOUD_HEIGHT = 100;

var renderCloud = function (ctx, x, y, color) {
  var offset = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + offset, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - offset);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - offset, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + offset);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 190, 40, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 180, 30, 'rgba(256, 256, 256, 1.0)');
};
