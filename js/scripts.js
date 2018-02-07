( function( $ ) {

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();



    $( "#user-form").on( 'submit', 'form', function( event ){
        event.preventDefault();

        var _form = $(this),
            name = _form.find( 'input[name="full-name"]' ),
            nameVal = name.val();

        if( nameVal === "" ) {
            name.parent('.form-item').addClass('error');
        } else {

            var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

            $( '.sortable' ).append( '<li style="background-color:'+ randomColor +'"><span class="icon"></span>'+ nameVal +'</li>' );

            if( $('.form-item').hasClass('error') ) {
                $('.form-item').removeClass('error');
            }
            _form.get(0).reset();
        }

    });

} )( jQuery );