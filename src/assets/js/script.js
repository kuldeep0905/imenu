function windowheight(){
	// var headerH = $('.navbar-default').height();
 $('.login_wrapper').css({'height':$(window).height()});
 $(window).resize(function(){
  $('.login_wrapper').css({'height':$(window).height()});
 });
}
$(function(){
 windowheight();
});

$(function(){
            $('#sidebarCollapse').on('click', function () {
                $('.main_sidebar').addClass('active');
            });
			$('#show-sidebar').on('click', function () {
                $('.main_sidebar').removeClass('active');
            });
			$('#sidebarCollapse').on('click', function () {
                $('body').addClass('body_wrap');
            });
			$('#show-sidebar').on('click', function () {
                $('body').removeClass('body_wrap');
            });	
});

				
		
var options = [];

$( '.dropdown-menu a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();
      
   console.log( options );
   return false;
});