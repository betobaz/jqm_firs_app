// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "../models/VisitaModel"], function($, Backbone, VisitaModel) {
    var VisitasCollection;
    VisitasCollection = (function(_super) {

      __extends(VisitasCollection, _super);

      function VisitasCollection() {
        return VisitasCollection.__super__.constructor.apply(this, arguments);
      }

      VisitasCollection.prototype.model = VisitaModel;

      return VisitasCollection;

    })(Backbone.Collection);
    return VisitasCollection;
  });

}).call(this);
