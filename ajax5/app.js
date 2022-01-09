$( "input" ).on( "keydown", function(event) {
  $( "div" ).html( event.type + ": " +  event.which );
});
