import 'bootstrap';
import $ from 'jquery';
import circleProgress from 'jquery-circle-progress';

$(document).ready(function() {

  /* slider */
  $('.carousel').carousel({
    interval: 3000
  });

  /* percent */
  $('.first.circle').circleProgress({
    value: 0.85,
    size: 140,
    startAngle:-Math.PI/2,
    thickness:6,
    lineCap:"round",
    emptyFill:"rgba(255, 255, 255, 0.15)",
    fill: {
      gradient: ["#ffa502", "#ffa502"]
    }
  });

  $('.second.circle').circleProgress({
    value: 0.74,
    size: 140,
    startAngle:-Math.PI/2,
    thickness:6,
    lineCap:"round",
    emptyFill:"rgba(255, 255, 255, 0.15)",
    fill: {
      gradient: ["#ffa502", "#ffa502"]
    }
  });

  $('.third.circle').circleProgress({
    value: 0.92,
    size: 140,
    startAngle:-Math.PI/2,
    thickness:6,
    lineCap:"round",
    emptyFill:"rgba(255, 255, 255, 0.15)",
    fill: {
      gradient: ["#ffa502", "#ffa502"]
    }
  });

  $('.fourth.circle').circleProgress({
    value: 0.57,
    size: 140,
    startAngle:-Math.PI/2,
    thickness:6,
    lineCap:"round",
    emptyFill:"rgba(255, 255, 255, 0.15)",
    fill: {
      gradient: ["#ffa502", "#ffa502"]
    }
  });
});
