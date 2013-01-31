define ['underscore', 'backbone', 'text!templates/list-visits.html', "../views/VisitsPageView"]
	class ListVisitsView extends Backbone.View
		el: $()

		template: _.template 

		render: () =>
			console.log("render")

	ListVisitsView