require({
  paths: {
    text: 'js/libs/amd/plugins/text',
    //jquery: 'js/libs/jquery',
    jquery: 'js/libs/jquery-1.7.1',
    //jqueryM: 'js/libs/jquery.mobile.custom.min',
    jqueryM: 'js/libs/jquery.mobile-1.0',
    //underscore: 'js/libs/underscore-min',
    underscore: 'js/libs/underscore-min',
    backbone: 'js/libs/backbone-min',
    sidetap: 'js/libs/sidetap.min',
    jqueryUiMap: 'js/libs/jquery.ui.map.full.min',
    hogan: 'js/libs/hogan-2.0.0',
    //'jquery.mobile.router': 'js/libs/jquery.mobile.router.min'    
    'jquery.mobile.router': 'js/libs/jquery.mobile.router'
  }
}, [
  'jquery',
  'jqueryM',
  'underscore',
  'backbone',
  'js/Router'
], function($, $$, _, Backbone, Router){

  $(function(){

  });
  require([ "jquery","sidetap" ], function( $,  Sidetap) {
    var st = sidetap();
    $(".header-button.menu").on("click",st.toggle_nav);
  });
});
