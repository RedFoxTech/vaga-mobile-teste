extends Area2D

func _ready():
	
	self.connect("input_event", self, "_input_event")
	
	pass
	
func _input_event(viewport, event, shape_idx):
	
	print("test")
	
	pass
