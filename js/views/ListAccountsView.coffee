define ['underscore', 'backbone', 'text!templates/list-accounts.html'], (_, Backbone, tmpl) ->
	class ListAccountsView extends Backbone.View
		el: '#list-accounts'

		template: _.template(tmpl)

		render: () =>
			$(@el).html(@template())
			@
			
	ListAccountsView
