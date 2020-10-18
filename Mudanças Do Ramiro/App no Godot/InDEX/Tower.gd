extends Node2D

onready var CooldownTimer = Timer.new()
onready var CooldownBaseTime = 1.5
onready var TowerRange = 500

func _ready():
	
	CooldownTimer.wait_time = CooldownBaseTime
	CooldownTimer.start()
	CooldownTimer.connect("timeout", self, "Shoot")
	
	pass
	
func Shoot():
	
	
	
	pass
