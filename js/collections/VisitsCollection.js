// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "../models/VisitModel"], function($, Backbone, VisitModel) {
    var VisitsCollection;
    VisitsCollection = (function(_super) {

      __extends(VisitsCollection, _super);

      function VisitsCollection() {
        return VisitsCollection.__super__.constructor.apply(this, arguments);
      }

      VisitsCollection.prototype.model = VisitModel;

      return VisitsCollection;

    })(Backbone.Collection);
    return VisitsCollection;
  });

}).call(this);