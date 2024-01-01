jQuery(document).ready(function() {
    jQuery('.pc__tab__title').on('click', function() {
        if ( jQuery(this).parent().hasClass('pc__tab--active') ) {
            jQuery(this).parent().removeClass('pc__tab--active');
            jQuery(this).parent().find('.pc__tab__content').slideUp();
        } else {
            jQuery(this).parent().addClass('pc__tab--active');
            jQuery(this).parent().find('.pc__tab__content').slideDown();
        }

        //jQuery(this).parent().addClass('pc__tab--active');
    });
});