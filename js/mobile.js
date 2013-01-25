require.config( {
  
        // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
        paths: {

            // Core Libraries
            "jquery": "lib/jquery",
            "jquerymobile": "lib/jquery.mobile.custom.min",
            "underscore": "lib/underscore-min",
            "backbone": "lib/backbone",
            "sidetap": "lib/sidetap.min"
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

      require([ "jquery","backbone", "sidetap", 
        //"routers/mobileRouter",
        "jquerymobile" ], function( $, Backbone, Mobile ) {

        // Prevents all anchor click handling
        $.mobile.linkBindingEnabled = false;

        // Disabling this will prevent jQuery Mobile from handling hash changes
        $.mobile.hashListeningEnabled = false;

        var st = sidetap();
        $(".header-button.menu").on("click",st.toggle_nav);

        // Instantiates a new Backbone.js Mobile Router
        this.router = new Mobile();  

        

      } );