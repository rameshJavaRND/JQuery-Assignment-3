$( "input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut(5000);
});
