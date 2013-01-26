require.config( {
  
        // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
        paths: {

            // Core Libraries
            "jquery": "lib/jquery",
            "jquerymobile": "lib/jquery.mobile.custom.min",
            "underscore": "lib/underscore-min",
            "backbone": "lib/backbone",
            "sidetap": "lib/sidetap.min",
            "app" : "App" ,             
        },

        // Sets the configuration for your third party scripts that are not AMD compatible
        shim: {

            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            }

        } // end Shim Configuration

      } );

      // Includes File Dependencies      

      require([ "jquery","backbone", "sidetap", "app",  ], function( $,  Backbone, Sidetap, App ) {
        

        //require(["visitaModel", "visitasCollection", "visitaView"], function(){
            require(["routers/mobileRouter"], function(Mobile){
                $(document).on("mobileinit",
                    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
                    function() {
                        // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
                        $.mobile.linkBindingEnabled = false;

                        // Disabling this will prevent jQuery Mobile from handling hash changes
                        $.mobile.hashListeningEnabled = false;

                        var st = sidetap();
                        $(".header-button.menu").on("click",st.toggle_nav);
                    });

                    require(["jquerymobile"], function() {
                        // Instantiates a new Backbone.js Mobile Router
                        this.router = new Mobile();
                    });    
            });
        //});

        
        

      } );