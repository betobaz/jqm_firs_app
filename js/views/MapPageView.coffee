define ['underscore', 'backbone', 'jqueryUiMap','text!templates/map.html'], (_, Backbone, JQMap, tmpl) ->
	class MapView extends Backbone.View
		el: '#page-map'

		template: _.template(tmpl)

		render: () =>
			$(@el).html(@template())
			@$el.find("#map").gmap();
			@

	MapView