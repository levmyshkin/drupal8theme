(function ($) {
  Drupal.behaviors.drupalbookTheme = {
    attach: function (context, settings) {
      var mainMenu = $('#block-mainnavigation > .menu').once('menu').addClass('sf-menu').superfish({ });
    }
  };
})(jQuery);