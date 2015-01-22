apos.widgetPlayers.toc = function($el) {

  var $area =  $el.closest('.apos-content');
  $el.toc({
    'container': $area,
    'selectors': 'h3,h4,h5,h6'

  });

}
