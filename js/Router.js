define([
  'jquery',
  'underscore',
  'backbone'
  ,'js/views/ListAccountsView'
  ,'js/views/MapView'
  ,'js/views/ListVisitsView'
], function($, _, Backbone, ListAccountsView, MapView, ListVisitsView){
  new $.mobile.Router({  
    "/list-accounts": { handler: 'list-accounts', events: "bc" }    
    ,"/list-visits": { handler: 'list-visits', events: "bc" }
    ,"/map": { handler: 'map', events: "bc" }
  }, {    

    'list-accounts': function(){
      new ListAccountsView().render();
    },

    'list-visits': function(){
      new ListVisitsView().render();
    },

    'map': function(){
      new MapView().render();
    },

    'default': function(){
      console.log('No route found.');
    }
  }, {
    ajaxApp: true,
    defaultHandler: 'default'
  });
});
