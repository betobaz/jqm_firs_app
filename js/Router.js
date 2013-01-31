define([
  'jquery',
  'underscore',
  'backbone'
  ,'js/views/AccountsPageView'
  ,'js/views/MapPageView'
  ,'js/views/VisitsPageView'
], function($, _, Backbone, AccountsPageView, MapPageView, VisitsPageView){
  new $.mobile.Router({  
    "accounts": { handler: 'accounts', events: "bc" }    
    ,"visits": { handler: 'visits', events: "bc" }
    ,"map": { handler: 'map', events: "bc" }
  }, {    

    'accounts': function(){
      new AccountsPageView().render();
    },

    'visits': function(){
      new VisitsPageView().render();
    },

    'map': function(){
      new MapPageView().render();
    },

    'default': function(){
      console.log('No route found.');
    }
  }, {
    ajaxApp: true,
    defaultHandler: 'default'
  });
});
