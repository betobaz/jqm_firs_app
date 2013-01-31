define ['underscore', 'backbone', 'text!templates/visits-page.html', "../views/ListVisitsView"], (_, Backbone, tmpl, ListVisitsView) ->
	class ListVisitsPageView extends Backbone.View

		el: '#page-list-visits'

		template: _.template(tmpl)

		initialize: () =>
			_.bindAll @

		render: () =>
			$(@el).html(@template())
			@

		loadVisits: () =>
			listVisits = new ListVisitsView {
				el: $('#visits-content')[0]				
			}

	ListVisitsPageView