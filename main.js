var menu = $(".hamburger-menu");

var openmenu = $(".fa-bars");

openmenu.click( function() {
  menu.slideDown();
});

var closemenu = $(".fa-times")

closemenu.click(function() {
  menu.slideUp();
})
