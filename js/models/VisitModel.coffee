define ["jquery", "backbone"], ($, Backbone) ->
	class VisitModel extends Backbone.Model
		attributes:
			orden: null
			date_entered: null
			date_due: null
			position: null
			account_name: null
			account_id: null
	VisitModel	