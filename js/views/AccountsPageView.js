// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'text!templates/list-accounts.html'], function(_, Backbone, tmpl) {
    var ListAccountsView;
    ListAccountsView = (function(_super) {

      __extends(ListAccountsView, _super);

      function ListAccountsView() {
        this.render = __bind(this.render, this);
        return ListAccountsView.__super__.constructor.apply(this, arguments);
      }

      ListAccountsView.prototype.el = '#page-list-accounts';

      ListAccountsView.prototype.template = _.template(tmpl);

      ListAccountsView.prototype.render = function() {
        $(this.el).html(this.template());
        return this;
      };

      return ListAccountsView;

    })(Backbone.View);
    return ListAccountsView;
  });

}).call(this);
