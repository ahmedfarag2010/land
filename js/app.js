window.onload = () => {
    expand_and_collapse()
    tabs()
}



//-- Expand and collapse side menu
expand_and_collapse = () => {
    // $(document).on('swiperight', function() {
    //     $('.sidemenu').addClass("active");
    //     $('.expand_collapse').addClass("active");
    // });
    // $(document).on('swipeleft', function() {
    //     $('.sidemenu').removeClass("active");
    //     $('.expand_collapse').removeClass("active");
    // });
    $('.expand_collapse').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.sidemenu').removeClass("active");
        } else {
            $(this).addClass('active')
            $('.sidemenu').addClass("active");
        }
    })
}

//-- Tabs
tabs = () => {
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
}
