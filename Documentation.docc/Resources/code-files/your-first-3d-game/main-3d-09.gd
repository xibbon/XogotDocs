extends Node

@export var mob_scene: PackedScene


func _ready():
    $UI/Labels/Retry.hide()


func _on_mob_timer_timeout():
    # Create a new instance of the Mob scene.
    var mob = mob_scene.instantiate()

    # Choose a random location on the SpawnPath.
    # We store the reference to the SpawnLocation node.
    var mob_spawn_location = get_node("SpawnPath/SpawnLocation")
    # And give it a random offset.
    mob_spawn_location.progress_ratio = randf()

    var player_position = Vector3($Player.position.x, 0, $Player.position.z)
    mob.initialize(mob_spawn_location.position, player_position)

    # Spawn the mob by adding it to the Main scene.
    add_child(mob)

    # When the mob is squashed, make the squasher bounce.
    mob.squashed.connect(_on_mob_squashed.bind())

    # We connect the mob to the score label to update the score upon squashing one.
    mob.squashed.connect($UI/Labels/ScoreLabel._on_mob_squashed.bind())


func _on_mob_squashed(by):
    if by.has_method("bounce"):
        by.bounce()


func _on_player_hit():
    $MobTimer.stop()
    $UI/Labels/Retry.show()
    # Hide the on-screen virtual joystick while the retry overlay is
    # shown, so it doesn't get in the way of the player reading the score.
    $UI/VirtualJoystickLeft.hide()
    $UI/VirtualJoystickLeft.set_process_input(false)


func _input(event):
    if $UI/Labels/Retry.visible:
        var is_tap = event is InputEventScreenTouch and event.pressed
        if event.is_action_pressed("ui_accept") or is_tap:
            get_viewport().set_input_as_handled()
            # Release any pressed movement actions before reloading.
            for action in ["move_left", "move_right", "move_forward", "move_back"]:
                if Input.is_action_pressed(action):
                    Input.action_release(action)
            # This restarts the current scene.
            get_tree().reload_current_scene()