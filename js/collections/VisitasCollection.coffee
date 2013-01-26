define ["jquery", "backbone", "../models/VisitaModel"], ($, Backbone, Model) ->
	class Visitas.Collections.VisitasCollection extends Backbone.Collection
		model: Model
