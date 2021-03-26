var names = {
    "Marta": 10,
    "Niklas": 10,
    "Christoffer": 20,
    "Petter": 10,
    "Jakob": 10,
    "Mia": 6,
    "Andreas": 5,
    "Karolina": 5,
    "Carl": 5,
    "David": 3,
    "Jarle": 1
};

function reset() {
    clearTimeout(tid);
    $('#names').empty();
    jQuery.each(names, function(count, name) {
        for (var i = 0; i < count; i++) {
            var nameDiv = $('<div class="name alive"/>').text(name);
            
            if (i == 0) $('#names').append(nameDiv);
            else {
                var nameDivs = $('#names .name'),
                    index = ~~(Math.random() * nameDivs.length);
    
                nameDivs.eq(index)[~~(Math.random() * 2) ? 'before' : 'after'](nameDiv);
            }
        }
    });
}

var tid;
function pickWinner() {
    clearTimeout(tid);

    var num = $('.alive').length,
        i = ~~(Math.random() * num--);
    
    $('.alive').eq(i).removeClass('alive').animate({opacity: '0', transform: 'scale(1.5)'});
    
    if (num > 1) tid = setTimeout(arguments.callee, 10000/Math.pow(num, 1.1));
    else {
        $('.alive').animate({
            fontSize: '54px'
        }, 2000);
    }
}
        
$('#go').click(pickWinner);
$('#reset').click(reset);

reset();
