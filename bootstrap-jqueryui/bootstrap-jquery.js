/*$.widget( "ui.selectable", $.ui.selectable, {
    _create: function() {
        var output = this._super();
        console.log( "create" );
        $('.ui-selectable').addClass('list-group');
        $('.ui-selectee').addClass('list-group-item');

        return output;
    },
    _mouseStop: function() {

        var output = this._super();
        console.log( "mouse stop" );
        $('.ui-selectee').removeClass('active');
        $('.ui-selected').addClass('active');

        return output;
    }
});*/