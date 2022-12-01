function set_slider() {
    $('.jspsych-html-slider-response-response').slider();
    
    // hide all slider handles
    $('.ui-slider-handle').hide();

    $('.jspsych-html-slider-response-response').slider().on('slidestart', function( event, ui ) {
        var id = $(this).attr('id');
        $('#'+id).find('.ui-slider-handle').show();
        // show handle if all three sliders responded
        if ($('.ui-slider-handle:hidden').length == 0) {
            $('#jspsych-html-slider-response-next').prop('disabled', false);
            $('#jspsych-instructions-next').prop('disabled', false);
        }
    });

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function order_condensed(t) {
    var order = [...Array(19).keys()];
    order = shuffle(order);
    order.splice(10, 0, 19);   // X1 
    //console.log(order);
    return order;
}
