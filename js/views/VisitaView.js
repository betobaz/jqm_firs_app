// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "../models/VisitaModel"], function($, Backbone, Models) {
    return Visitas.Collections.VisitaView = (function(_super) {

      __extends(VisitaView, _super);

      function VisitaView() {
        return VisitaView.__super__.constructor.apply(this, arguments);
      }

      return VisitaView;

    })(Backbone.View);
  });

}).call(this);
