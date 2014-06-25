$(function() {
    $('*[data-toggle="dialog"]').each( function() {

        var $target = $($(this).data('target'));

        $target.dialog({
            autoOpen: false,
            create: function( event, ui ) {
                $('.ui-dialog').addClass('modal-content');
                $('.ui-dialog-titlebar').addClass('modal-header');
                $('.ui-dialog-titlebar button').addClass('close');
                $('.ui-dialog-titlebar button').html('&times');
                $('.ui-dialog-content').addClass('modal-body');
            }
        });

        $(this).click( function() {
            $target.dialog( "open" );
            return false;
        });
    });
});