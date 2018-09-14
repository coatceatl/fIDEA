import 'bootstrap';
import $ from 'jquery';
import circleProgress from 'jquery-circle-progress';
/*
$(document).ready(function () {
  $('.carousel').carousel({
    interval: 2000
  });

  $('.first.circle').circleProgress({
    value: 0.6
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  });
});
*/

$(document).ready(function() {
  $('.first.circle').circleProgress({
    value: 0.85,
    size: 140,
    startAngle:-Math.PI/2,
    thickness:6,
    lineCap:"round",
    emptyFill:"rgba(255, 255, 255, 0.15)",
    fill: {
      gradient: ["#fff", "#fff"]
    }
  });
});
