define ['underscore', 'backbone', 'text!templates/map.html'], (_, Backbone, tmpl) ->
	class MapView extends Backbone.View
		el: '#page-map'

		template: _.template(tmpl)

		render: () =>
			$(@el).html(@template())
			@

	MapView