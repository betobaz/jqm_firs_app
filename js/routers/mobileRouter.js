
// Mobile Router
// =============

// Includes file dependencies
define(["jquery", "backbone", "../models/VisitaModel", "../collections/VisitasCollection", "../views/VisitaView"], function($, Backbone, VisitaModel, VisitasCollection, VisitaView) {

    // Extends Backbone.Router
    var VisitasRouter = Backbone.Router.extend({

            // The Router constructor
            initialize: function() {

                // Instantiates a new Animal Category View
                this.visitasView = new VisitaView({
                    el: "#page-visitas",
                    collection: new VisitasCollection([], {
                        type: "visita"
                    })
                });

                
                // Instantiates a new Colors Category View
                this.accountsView = new VisitaView({
                    el: "#page-map",
                    collection: new VisitasCollection([], {
                        type: "mapa"
                    })
                });

                // Instantiates a new Vehicles Category View
                this.mapaView = new VisitaView({
                    el: "#page-accounts",
                    collection: new VisitasCollection([], {
                        type: "account"
                    })
                });

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // Backbone.js Routes
            routes: {

                // When there is no hash bang on the url, the home method is called
                "": "home",

                // When #category? is on the url, the category method is called
                "visita?:type": "category"

            },

            // Home method
            home: function() {

                // Programatically changes to the categories page
                $.mobile.changePage("#page-visitas", {
                    reverse: false,
                    changeHash: false
                });

            },

            map: function() {

                // Programatically changes to the categories page
                $.mobile.changePage("#page-map", {
                    reverse: false,
                    changeHash: false
                });

            },

            // Category method that passes in the type that is appended to the url hash
            category: function(type) {

                // Stores the current Category View  inside of the currentView variable
                var currentView = this[type + "View"];

                // If there are no collections in the current Category View
                if (!currentView.collection.length) {

                    // Show's the jQuery Mobile loading icon
                    $.mobile.loading("show");

                    // Fetches the Collection of Category Models for the current Category View
                    currentView.collection.fetch().done(function() {

                        // Programatically changes to the current categories page
                        $.mobile.changePage("#" + type, {
                            reverse: false,
                            changeHash: false
                        });

                    });

                }

                // If there already collections in the current Category View
                else {

                    // Programatically changes to the current categories page
                    $.mobile.changePage("#" + type, {
                        reverse: false,
                        changeHash: false
                    });

                }

            }

        });

        // Returns the Router class
        return VisitasRouter;

    
}); 