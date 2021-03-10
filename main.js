var menu = $(".hamburger-menu");

var openmenu = $(".fa-bars");

openmenu.click( function() {
  menu.addClass("active")
});
// openmenu.click( function() {
//   menu.slideDown();
// });
//
var closemenu = $(".close")

closemenu.click( function() {
  menu.removeClass("active")
});
//
// closemenu.click(function() {
//   menu.slideUp();
// })
