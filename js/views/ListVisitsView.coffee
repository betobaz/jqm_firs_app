define ['underscore', 'backbone', 'text!templates/list-visits.html'], (_, Backbone, tmpl) ->
	class ListVisitsView extends Backbone.View
		el: '#page-list-visits'

		template: _.template(tmpl)

		render: () =>
			$(@el).html(@template())
			@
	ListVisitsView