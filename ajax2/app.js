$( "body" ).click(function( event ) {
  $( "#log" ).html( "Clicked a  " + event.target.nodeName );
});
