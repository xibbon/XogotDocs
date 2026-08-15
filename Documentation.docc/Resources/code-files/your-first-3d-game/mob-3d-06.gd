extends CharacterBody3D

# Minimum speed of the mob in meters per second.
@export var min_speed = 10
# Maximum speed of the mob in meters per second.
@export var max_speed = 18

# Emitted when the player jumped on the mob. The argument is the body
# that squashed it (the player), so Main can make it bounce.
signal squashed(by: Node3D)


func _physics_process(_delta):
    move_and_slide()


# This function will be called from the Main scene.
func initialize(start_position, player_position):
    # We position the mob by placing it at start_position
    # and rotate it towards player_position, so it looks at the player.
    look_at_from_position(start_position, player_position, Vector3.UP)
    # Rotate this mob randomly within range of -45 and +45 degrees,
    # so that it doesn't move directly towards the player.
    rotate_y(randf_range(-PI / 4, PI / 4))

    # We calculate a random speed (integer)
    var random_speed = randi_range(min_speed, max_speed)
    # We calculate a forward velocity that represents the speed.
    velocity = Vector3.FORWARD * random_speed
    # We then rotate the velocity vector based on the mob's Y rotation
    # in order to move in the direction the mob is looking.
    velocity = velocity.rotated(Vector3.UP, rotation.y)


func _on_visible_on_screen_notifier_3d_screen_exited():
    queue_free()


func squash(by = null):
    squashed.emit(by)
    queue_free()


# Called when a physics body enters the HitBox area above the mob's back.
# We only squash the mob if the body is falling — a player landing on top.
func _on_hit_box_body_entered(body):
    if body is CharacterBody3D and body.velocity.y < 0:
        squash(body)


# Called when a physics body enters the HurtBox area along the mob's body.
# We only kill the player if they're on the floor — jumping over the
# snake is a safe strategy.
func _on_hurt_box_body_entered(body):
    if not body.has_method("die"):
        return
    if body is CharacterBody3D and not body.is_on_floor():
        return
    body.die()