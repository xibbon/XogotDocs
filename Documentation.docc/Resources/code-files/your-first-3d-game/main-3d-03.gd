extends Node

@export var mob_scene: PackedScene


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


func _on_mob_squashed(by):
    if by.has_method("bounce"):
        by.bounce()