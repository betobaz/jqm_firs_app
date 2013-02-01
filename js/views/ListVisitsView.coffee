define ['underscore', 'backbone', 'hogan' ], (_, Backbone, Hogan) ->
	class ListVisitsView extends Backbone.View		
		
		initialize: () ->
			@render @collection

		render: () =>
			console.log("render")
			for visit in @collection.models
				do(visit) =>
					console.log(visit)
					visitRendered = $(@options.template.render(visit.toJSON())) 
					@$el.append visitRendered


	ListVisitsView