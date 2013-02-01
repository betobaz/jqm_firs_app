define ['underscore', 'backbone', 'text!templates/visits-page.html', "../views/ListVisitsView", "../collections/VisitsCollection"], (_, Backbone, tmpl, ListVisitsView, VisitsCollection) ->
	class ListVisitsPageView extends Backbone.View

		el: '#page-list-visits'

		template: _.template(tmpl)

		initialize: () =>
			_.bindAll @

		render: () =>
			$(@el).html(@template())
			@loadVisits()
			@

		loadVisits: () =>
			visitsData = [
				{
					orden: 1
					position: {
						latitude: 123456
						longitude: 13216456
					}					
					date_due: Date()
					account_name: "Merxbp"
					account_id: "32146546432134654"
				}
				{
					orden: 2
					position: {
						latitude: 123456
						longitude: 13216456
					}					
					date_due: Date()
					account_name: "Abpro"
					account_id: "32146546432134654"
				}
			]			
			listVisits = new ListVisitsView {
				el: @$el.find('#visits-content').find("ul"),
				collection : new VisitsCollection(visitsData)	
				template: Hogan.compile(@$el.find('#visit-list-item').html())	
			}

	ListVisitsPageView