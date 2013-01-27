define(['underscore', 'backbone', 'text!templates/list-accounts.html'], function(_, Backbone, tmpl) {
    var ListAccountsView;
    ListAccountsView = (function(_super) {

      __extends(ListAccountsView, _super);

      function ListAccountsView() {
        this.render = __bind(this.render, this);
        return ListAccountsView.__super__.constructor.apply(this, arguments);
      }

      ListAccountsView.prototype.el = '#list-accounts';

      ListAccountsView.prototype.template = _.template(tmpl);

      ListAccountsView.prototype.render = function() {
        $(this.el).html(this.template());
        return this;
      };

      return ListAccountsView;

    })(Backbone.View);
    return ListAccountsView;
});