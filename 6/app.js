$("body").delegate( "h1", "click", function() {
  $(this).after( "<h1>Another header!</h1>" );
});
