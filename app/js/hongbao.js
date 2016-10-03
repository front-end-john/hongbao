var $ = require('jquery');
$(function(){
    var obj = $('#get-hb');
    obj.on('touchstart click', function() {
        alert('ok');
        $(this).toggleClass('hover');
    }); 
});