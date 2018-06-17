console.log('true');
$('.envelope').on('click', function(e) {
    console.log('true');
    $('.envelope-top').toggleClass('envelope-top-close');
    $('.paper').toggleClass('paper-close')
});
