extends CharacterBody3D

# Emitted when the player was hit by a mob.
signal hit

# How fast the player moves in meters per second.
@export var speed = 14
# The downward acceleration when in the air, in meters per second squared.
@export var fall_acceleration = 75
# Vertical impulse applied to the character upon jumping in meters per second.
@export var jump_impulse = 20
# Vertical impulse applied to the character upon bouncing over a mob in
# meters per second.
@export var bounce_impulse = 16
# Grace period (in seconds) after leaving the ground during which the
# player can still jump. This is "coyote time": for a brief moment after
# walking off a ledge, the game pretends the player is still on the
# floor, so a slightly-late jump press still works. It feels fair on a
# keyboard and especially on a touch screen, where input latency eats a
# few frames.
@export var coyote_time = 0.1
# How long (in seconds) to remember a jump press that happened while the
# player was still in the air. This is "jump buffering": if the player
# presses jump a hair too early while falling toward the ground, the
# press is buffered and fires the instant they land, instead of being
# swallowed.
@export var jump_buffer = 0.1

var target_velocity = Vector3.ZERO
# Counts down from coyote_time while the player is in the air.
var _coyote_timer = 0.0
# Counts down from jump_buffer after a jump press.
var _jump_buffer_timer = 0.0

# The AnimationPlayer that lives inside the glTF model. It holds the
# model's embedded animations, like "Idle" and "Run".
@onready var skeleton_animation_player = $Pivot/Character/AnimationPlayer
# The AnimationPlayer we added to the Player scene. It holds the custom
# "jump" animation we loaded from resources/jump.res.
@onready var animation_player = $AnimationPlayer


func _physics_process(delta):
    # We create a local variable to store the input direction.
    var direction = Vector3.ZERO

    # Get the input direction and handle moving the player.
    # Input.get_vector() returns a 2D vector with analog values from joysticks
    # and digital values (-1, 0, 1) from keyboard. This gives us smooth 360-degree
    # movement from touch joysticks while still working perfectly with keyboards.
    var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_back")
    # Convert the 2D input to 3D. Notice how we are working with the x and z axes.
    # In 3D, the XZ plane is the ground plane.
    direction = Vector3(input_dir.x, 0, input_dir.y)

    if direction != Vector3.ZERO:
        direction = direction.normalized()
        # Setting the basis property will affect the rotation of the node.
        $Pivot.basis = Basis.looking_at(direction)
        # Speed up the run animation while the character is moving.
        skeleton_animation_player.speed_scale = 4
    else:
        # Back to normal speed when standing still.
        skeleton_animation_player.speed_scale = 1

    # Ground Velocity
    target_velocity.x = direction.x * speed
    target_velocity.z = direction.z * speed

    # Vertical Velocity
    if not is_on_floor(): # If in the air, fall towards the floor. Literally gravity
        target_velocity.y = target_velocity.y - (fall_acceleration * delta)

    # --- Coyote time ---
    # Keep the coyote window open while on the ground; tick it down once
    # the player is in the air. While it is above zero, the player may
    # still jump as if they were on the floor.
    if is_on_floor():
        _coyote_timer = coyote_time
    else:
        _coyote_timer = max(0.0, _coyote_timer - delta)

    # --- Jump buffering ---
    # On a fresh jump press, fill the buffer. Otherwise tick it down so a
    # stale press eventually expires.
    if Input.is_action_just_pressed("jump"):
        _jump_buffer_timer = jump_buffer
    else:
        _jump_buffer_timer = max(0.0, _jump_buffer_timer - delta)

    # --- Jump ---
    # Fire when there is both a buffered press and a valid coyote
    # window. Clearing both timers prevents double-jumping off coyote.
    if _jump_buffer_timer > 0.0 and _coyote_timer > 0.0:
        jump()
        _coyote_timer = 0.0
        _jump_buffer_timer = 0.0

    # Moving the Character
    velocity = target_velocity
    move_and_slide()

    # Tilt the Pivot based on the vertical velocity to give the jump an arc.
    $Pivot.rotation.x = PI / 6 * velocity.y / jump_impulse


func jump():
    target_velocity.y = jump_impulse
    # While in the air, switch the skeleton back to Idle so the run cycle
    # doesn't keep playing.
    skeleton_animation_player.play("Idle")
    # Play the custom jump animation on the Player scene's AnimationPlayer.
    animation_player.play("jump")


# Called by the mob's HurtBox when the player touches the snake's body
# while on the floor.
func die():
    hit.emit()
    queue_free()


# Called by Main after a mob is squashed: the squasher bounces back up.
func bounce():
    target_velocity.y = bounce_impulse
    animation_player.play("jump")