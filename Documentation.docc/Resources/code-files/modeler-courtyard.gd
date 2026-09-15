extends Node3D

func _ready() -> void:
	var areas := $GateTrigger.find_children("*", "Area3D")
	if areas.is_empty():
		push_warning("GateTrigger has no Area3D. Use Set Trigger first.")
		return
	var trigger := areas[0] as Area3D
	trigger.body_entered.connect(_on_gate_body_entered)

func _on_gate_body_entered(body: Node3D) -> void:
	print("%s went through the gate." % body.name)
