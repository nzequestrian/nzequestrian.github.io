$('body').scrollspy({ target: '#main-nav' })

$(document).ready(function () {
    $("li").click(function () {
        $('li > ul').hide();
        $(this).children("ul").toggle();
    });
});