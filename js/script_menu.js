(function($) {

  $.fn.menumaker = function(options) {
      
      var nav = $(this), settings = $.extend({
        title: "",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        nav.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        nav.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          nav.find(".has-sub").prepend('<span class="submenu-button"></span>');
          nav.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else nav.addClass('dropdown');

        if (settings.sticky === true) nav.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            nav.find('ul').show();
          }

          if ($(window).width() <= 768) {
            nav.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("nav").menumaker({
   title: "",
   format: "multitoggle"
});

});
})(jQuery);
