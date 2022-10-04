$(document).ready(function(){

  $('aside dl dt').click(function () {
    $('aside dl dt').removeClass('on');
    $(this).addClass('on');
    $('aside dl dd').addClass('hidden');
    $(this).next().removeClass('hidden');
  });
})