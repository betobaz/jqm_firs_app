require({
  paths: {
    text: 'js/libs/amd/plugins/text',
    //jquery: 'js/libs/jquery',
    jquery: 'js/libs/jquery-1.7.1',
    //jqueryM: 'js/libs/jquery.mobile.custom.min',
    jqueryM: 'js/libs/jquery.mobile-1.0',
    underscore: 'js/libs/underscore-min',
    backbone: 'js/libs/backbone',
    //sidetap: 'js/libs/sidetap.min',
    'jquery.mobile.router': 'js/libs/jquery.mobile.router'
  }
}, [
  'jquery',
  'jqueryM',
  'underscore',
  'backbone',
  //'sidetap',
  'js/Router'
], function($, $$, _, Backbone, Router){

  $(function(){
  });
});
