define ["jquery", "backbone", "../models/VisitaModel"], ($, Backbone, VisitaModel) ->
	class VisitasCollection extends Backbone.Collection
				
		model: VisitaModel		

	VisitasCollection