define ["jquery", "backbone", "../models/VisitModel"], ($, Backbone, VisitModel) ->
	class VisitsCollection extends Backbone.Collection
				
		model: VisitModel		

	VisitsCollection