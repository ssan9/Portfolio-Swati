'use strict';

$(function(){

    var text = [
        'user interfaces.',
        'web applications.',
        'landing pages.',
        ], i = 0;

    setInterval(function(){
        $('.dynamic-info').fadeOut(function(){
            $(this).html(text[i=(i+1)%text.length]).fadeIn();
        });
       // 2 seconds
    }, 2000);

})();