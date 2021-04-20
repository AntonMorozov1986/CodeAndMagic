'use strict';

const CLOUD_WIDTH = 350;
const CLOUD_HEIGHT = 180;
const CLOUD_POSITION_X = 180;
const CLOUD_POSITION_Y = 20;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 70;
const BAR_HEIGHT = 20;
let barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, positionX, positionY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX, positionY, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(array) {
  var maxElement = array[0];
  for (var i = 1; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_POSITION_X + GAP, CLOUD_POSITION_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  // ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  // ctx.fillRect(180, 20, 350, 250);

  renderCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, '#fff')
  // ctx.fillStyle = '#fff';
  // ctx.fillRect(170, 10, 350, 250);



  //var players = ['Вы', 'Юлия', 'Иван', 'Андрей']

  var maxTime = getMaxElement(times);
  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000'
    ctx.fillText(players[i], CLOUD_POSITION_X + GAP, CLOUD_POSITION_Y + GAP + FONT_GAP + ((GAP + BAR_HEIGHT) * i));
    ctx.fillStyle = 'rgb(0, 0, 255)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    }
    ctx.fillRect(CLOUD_POSITION_X + GAP + TEXT_WIDTH, CLOUD_POSITION_Y + GAP + ((GAP + BAR_HEIGHT) * i), ((barWidth * times[i]) / maxTime), BAR_HEIGHT);
  }

  // ctx.fillText('Вы', CLOUD_POSITION_X + GAP, CLOUD_POSITION_Y + GAP + FONT_GAP);
  // ctx.fillRect(CLOUD_POSITION_X + GAP + TEXT_WIDTH, CLOUD_POSITION_Y + GAP, barWidth, BAR_HEIGHT);
  // // ctx.fillText('Ура вы победили', 100, 10, 100);
  // ctx.fillText('Иван', 110, 105);
  // ctx.fillRect(160, 90, 430, 20);
  // ctx.fillText('Юлия', 110, 135);
  // ctx.fillRect(160, 120, 430, 20);
}